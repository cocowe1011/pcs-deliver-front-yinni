<template>
  <div class="config">
    <div>
      <div class="formDiv">
        <div class="card-title">{{ $t('config.peizhiliebiao') }}</div>
        <div class="card-content">
          <el-form label-position="right" label-width="150px" :model="cssConfig" v-loading="loading">
            <el-divider content-position="left">PLC</el-divider>
            <el-form-item :label="$t('config.ipaddress')">
              <el-input v-model="cssConfig.plcIp" style="width: 250px;"></el-input>
            </el-form-item>
            <el-divider content-position="left">{{ $t('config.yuyanshezhi') }}</el-divider>
            <el-form-item :label="$t('config.yuyanshezhi') + '：'">
              <el-select v-model="cssConfig.languageSet" style="width: 250px;">
                <el-option label="中文" value="0"></el-option>
                <el-option label="english" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="footer">
        <el-button type="info" plain @click="allowEdit=true" v-show="!allowEdit">{{ $t('config.yemiansuodingTip') }}</el-button>
        <el-button type="primary" @click="update" v-show="allowEdit">{{ $t('config.save') }}</el-button>
        <el-button @click="allowEdit=false" v-show="allowEdit">{{ $t('config.cancel') }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron'
import HttpUtil from '@/utils/HttpUtil'
import { EventBus } from '@/utils/EventBus'
export default {
  name: "SystemConfig",
  components: {},
  props: {},
  data() {
    return {
      cssConfig: {
        plcIp: '',
        plcPort: '',
        oneOneLength: '',
        twoLength: '',
        judgeLoadPoint: ''
      },
      configId: '',
      loading: false,
      allowEdit: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    getConfig() {
      this.loading = true
      // 查询配置
      HttpUtil.get('/cssConfig/getConfig').then((res)=> {
        this.cssConfig = res.data;
        this.configId = res.data.configId;
        this.loading = false
      }).catch((err)=> {
        this.loading = false
        console.log('config error!')
      });
    },
    update() {
      // 先判空处理
      if(this.cssConfig.plcIp === '' || this.cssConfig.plcIp === null || this.cssConfig.plcIp === undefined) {
        this.$message.error('PLC地址不可保存为空值！');
        return false
      }
      if(this.cssConfig.plcPort === '' || this.cssConfig.plcPort === null || this.cssConfig.plcPort === undefined) {
        this.$message.error('PLC端口不可保存为空值！');
        return false
      }
      if(this.cssConfig.oneOneLength === '' || this.cssConfig.oneOneLength === null || this.cssConfig.oneOneLength === undefined) {
        this.$message.error('L1-1长度不可保存为空值！');
        return false
      }
      if(this.cssConfig.twoLength === '' || this.cssConfig.twoLength === null || this.cssConfig.twoLength === undefined) {
        this.$message.error('L2长度不可保存为空值！');
        return false
      }
      if(this.cssConfig.judgeLoadPoint === '' || this.cssConfig.judgeLoadPoint === null || this.cssConfig.judgeLoadPoint === undefined) {
        this.$message.error('禁止上货判断点不可保存为空值！');
        return false
      }
      this.cssConfig.configId = this.configId;
      this.loading = true
      // 修改配置
      HttpUtil.post('/cssConfig/update', this.cssConfig).then((res)=> {
        if(res.data > 0) {
          this.$message.success('修改成功！')
          this.getConfig();
          // 通知其他页面刷新配置
          EventBus.$emit('reFlushConfig')
        }
        this.loading = false
      }).catch((err)=> {
        this.loading = false
        console.log('config error!')
      });
    }
  },
  created() {
    this.getConfig();
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.config {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  > div {
    width: 100%;
    height: 100%;
    opacity: 1;
    border-radius: 20px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    .formDiv {
      .card-title {
        height: 30px;
        width: 100%;
        font-weight: 550;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
        text-align: left;
        vertical-align: top;
        display: flex;
        align-items: flex-end;
        padding-left: 23px;
      }
      .card-content {
        height: calc(100% - 37px);
        width: 100%;
        padding: 0px 32px;
        box-sizing: border-box;
        > div {
          height: 43px;
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 14px;
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #f2f6fc;
      padding: 12px;
      text-align: center;
      box-sizing: border-box;
    }
  }
}
</style>