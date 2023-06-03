<template>
  <div class="homePage">
    <div class="maskDiv">
      <div class="maskDiv-top">
        <div class="maskDiv-top-left">
          <img />
        </div>
        <div class="maskDiv-top-mid">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">我的工作台</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
        </div>
        <div class="version-view">
            <div class="el-divider el-divider--vertical" style="margin-right:15px"></div>
            <div class="version-container">
                <div class="version-number">
                    <!-- <i class="el-icon-caret-bottom"></i> -->
                    V1.1.0
                </div>
            </div>
            <el-tooltip class="item" effect="dark" content="设置" placement="bottom">
              <i class="el-icon-setting" style="font-size: 18px;margin-right: 14px;"></i>
            </el-tooltip>
            <el-avatar :src="require('./img/header.png')" size="small" style="margin-right:10px;"></el-avatar>
            <div class="el-divider el-divider--vertical"></div>
        </div>
        <div class="maskDiv-top-min" @click="minWindow"><i class="el-icon-minus" style="font-size:18px;font-weight:600;"></i></div>
        <div class="maskDiv-top-max" @click="maxWindow"><i :class="windowSize === 'unmax-window' ? 'el-icon-full-screen' : 'el-icon-copy-document'" style="font-size:18px;font-weight:600;"></i></div>
        <div class="maskDiv-top-close" @click="closewindow"><i class="el-icon-close" style="font-size:18px;font-weight:600;"></i></div>
      </div>
      <div class="maskDiv-down">
        <router-view /></div>
      </div>
    </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: "HomePage",
  components: {},
  props: {},
  data() {
    return {
      activeIndex: '1',
      windowSize: 'max-window',
      showLogout: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    closewindow() {
      ipcRenderer.send('close-window')
    },
    minWindow() {
      ipcRenderer.send('min-window')
    },
    maxWindow() {
      this.windowSize = this.windowSize === 'unmax-window' ? 'max-window' : 'unmax-window';
      ipcRenderer.send('max-window', this.windowSize)
    },
    logout(command) {
      if(command == 'logout') {
        // 改变窗口大小
        this.$nextTick(() => {
          this.$router.replace({
            path: '/'
          });
        });
        this.$notify({
          title: '已退出登录！',
          message: '退出登录！',
          type: 'success',
          duration: 2000
        });
      }
    },
    changeIcon() {
      ipcRenderer.on('mainWin-max', (e, status) => {
        this.windowSize = status
      })
    }
  },
  created() {
    // 给主进程发送消息，更改窗口大小，设置最小大小，默认全屏
    ipcRenderer.send('logStatus','login');
    this.changeIcon()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.homePage {
  width: 100%;
  height: 100%;
  background: url(./img/background.png) no-repeat;
  background-size: 100% 100%;
  .maskDiv {
    width: 100%;
    height: 100%;
    opacity: 1;
    background: rgba(246, 247, 251, 0.6);
    box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(60px);
    &-top {
      height: 55px;
      width: 100%;
      display:flex;
      align-items: center;
      border-radius: 0px 0px 10px 10px;
      background: rgba(255, 255, 255, 1);
      &-left {
        flex:1;
        height: 100%;
        -webkit-app-region: drag;
        text-align: left;
      }
      &-min,&-close,&-max {
        height:45px;
        width:45px;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-app-region: no-drag;
      }
      &-min:hover,&-max:hover {
        background-color: #EEEEEE;
      }
      &-close:hover {
        background-color: #F8635F;
        color: #fff;
      }
      .version-view {
        height: 100%;
        display: inline-flex;
        align-items: center;
        vertical-align: text-bottom;
        cursor:pointer;
        .version-container {
          height: 20px;
          margin-right: 11px;
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          border-radius: 25px;
          background-color: rgba(47,84,235,.050980392156862744);
          .version-number {
            height: 20px;
            line-height: 20px;
            padding: 0 10px;
            color: #2f54eb;
            font-weight: 600;
            letter-spacing: 1px;
          }
        }
        .el-divider--vertical {
          display: inline-block;
          width: 1px;
          height: 1.5rem;
          margin: 0 8px;
          vertical-align: middle;
          position: relative;
        }
      }
      ::v-deep .el-menu--horizontal>.el-menu-item {
        margin-right: 30px;
        color: #000000;
        font-size: 13px;
        font-weight: 500;
        height: 55px;
        line-height: 60px;
      }
      ::v-deep .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 2px solid #3e7bfa;
      }
    }
    &-down {
      width: 100%;
      height: calc(100% - 55px);
    }
  }
}
</style>