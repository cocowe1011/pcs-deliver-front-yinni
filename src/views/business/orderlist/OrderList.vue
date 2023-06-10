<template>
  <div class="orderlist">
    <div>
      <div class="formDiv">
        <div class="card-title">工艺参数</div>
        <div class="card-content">
          <el-form :inline="true" label-position="right" label-width="115px" :model="orderMainForm" class="demo-form-inline">
            <el-form-item label="订单编号：">
              <el-input size="small" v-model="orderMainForm.orderNo" placeholder="订单编号"></el-input>
            </el-form-item>
            <el-form-item label="订单名称：">
              <el-input size="small" v-model="orderMainForm.orderName" placeholder="订单名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="orderMainForm.revertFlag">翻转</el-checkbox>
            </el-form-item>
            <br />
            <el-form-item label="批次编号：">
              <el-input size="small" v-model="orderMainForm.batchId" placeholder="批次编号"></el-input>
            </el-form-item>
            <el-form-item label="产品名称：">
              <el-input size="small" v-model="orderMainForm.productName" placeholder="产品名称"></el-input>
            </el-form-item>
            <el-form-item label="加速器k值：">
              <el-input size="small" v-model="orderMainForm.acceleratorKValue" placeholder="加速器k值"></el-input>
            </el-form-item>
            <br />
            <el-form-item label="工艺名称：">
              <el-input size="small" v-model="orderMainForm.artName" placeholder="工艺名称"></el-input>
            </el-form-item>
            <el-form-item label="装载方式：">
              <el-input size="small" v-model="orderMainForm.loadMethod" placeholder="装载方式"></el-input>
            </el-form-item>
            <el-form-item label="路径名称：">
              <el-input size="small" v-model="orderMainForm.pathName" placeholder="路径名称"></el-input>
            </el-form-item>
            <el-form-item label="圈数：">
              <el-input size="small" v-model="orderMainForm.numberTurns" placeholder="圈数"></el-input>
            </el-form-item>
            <br />
            <el-form-item label="箱子长度：">
              <el-input size="small" v-model="orderMainForm.boxLength" placeholder="箱子长度"></el-input>
            </el-form-item>
            <el-form-item label="箱子高度：">
              <el-input size="small" v-model="orderMainForm.boxWidth" placeholder="箱子高度"></el-input>
            </el-form-item>
            <el-form-item label="箱子宽度：">
              <el-input size="small" v-model="orderMainForm.boxHeight" placeholder="箱子宽度"></el-input>
            </el-form-item>
            <el-form-item label="箱子重量：">
              <el-input size="small" v-model="orderMainForm.boxWeight" placeholder="箱子重量"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="束流上限：">
              <el-input size="small" v-model="orderMainForm.slUpperLimit" placeholder="束流上限"></el-input>
            </el-form-item>
            <el-form-item label="束流设定值：">
              <el-input size="small" v-model="orderMainForm.slSet" placeholder="束流设定值"></el-input>
            </el-form-item>
            <el-form-item label="束流下限：">
              <el-input size="small" v-model="orderMainForm.slLowerLimit" placeholder="束流下限"></el-input>
            </el-form-item>
            <el-form-item label="功率上限：">
              <el-input size="small" v-model="orderMainForm.glUpperLimit" placeholder="功率上限"></el-input>
            </el-form-item>
            <el-form-item label="功率设定值：">
              <el-input size="small" v-model="orderMainForm.glSet" placeholder="功率设定值"></el-input>
            </el-form-item>
            <el-form-item label="功率下限：">
              <el-input size="small" v-model="orderMainForm.glLowerLimit" placeholder="功率下限"></el-input>
            </el-form-item>
            <el-form-item label="扫宽上限：">
              <el-input size="small" v-model="orderMainForm.skUpperLimit" placeholder="扫宽上限"></el-input>
            </el-form-item>
            <el-form-item label="扫宽设定值：">
              <el-input size="small" v-model="orderMainForm.skSet" placeholder="扫宽设定值"></el-input>
            </el-form-item>
            <el-form-item label="扫宽下限：">
              <el-input size="small" v-model="orderMainForm.skLowerLimit" placeholder="扫宽下限"></el-input>
            </el-form-item>
            <el-form-item label="扫描频率上限：">
              <el-input size="small" v-model="orderMainForm.smplUpperLimit" placeholder="扫描频率上限"></el-input>
            </el-form-item>
            <el-form-item label="扫描频率设定：">
              <el-input size="small" v-model="orderMainForm.smplSet" placeholder="扫描频率设定"></el-input>
            </el-form-item>
            <el-form-item label="扫描频率下限：">
              <el-input size="small" v-model="orderMainForm.smplLowerLimit" placeholder="扫描频率下限"></el-input>
            </el-form-item>
            <el-form-item label="PFN电压上限：">
              <el-input size="small" v-model="orderMainForm.pfnUpperLimit" placeholder="PFN电压上限"></el-input>
            </el-form-item>
            <el-form-item label="PFN电压设定：">
              <el-input size="small" v-model="orderMainForm.pfnSet" placeholder="PFN电压设定"></el-input>
            </el-form-item>
            <el-form-item label="PFN电压下限：">
              <el-input size="small" v-model="orderMainForm.pfnLowerLimit" placeholder="PFN电压下限"></el-input>
            </el-form-item>
            <el-form-item label="能量上限：">
              <el-input size="small" v-model="orderMainForm.nlUpperLimit" placeholder="能量上限"></el-input>
            </el-form-item>
            <el-form-item label="能量设定值：">
              <el-input size="small" v-model="orderMainForm.nlSet" placeholder="能量设定值"></el-input>
            </el-form-item>
            <el-form-item label="能量下限：">
              <el-input size="small" v-model="orderMainForm.nlLowerLimit" placeholder="能量下限"></el-input>
            </el-form-item>
            <el-form-item label="订单箱数：">
              <el-input size="small" v-model="orderMainForm.orderBoxNum" placeholder="订单箱数"></el-input>
            </el-form-item>
            <el-form-item label="剔除箱数：">
              <el-input size="small" v-model="orderMainForm.eliminateBoxNum" placeholder="剔除箱数"></el-input>
            </el-form-item>
            <el-form-item label="上货箱数：">
              <el-input size="small" v-model="orderMainForm.exhibitBoxNum" placeholder="上货箱数"></el-input>
            </el-form-item>
            <el-form-item label="合格箱数：">
              <el-input size="small" v-model="orderMainForm.qualifiedBoxNum" placeholder="合格箱数"></el-input>
            </el-form-item>
          </el-form>
          <div class="content-bottom">
            <el-button type="primary" size="small" icon="el-icon-success" @click="saveOrder" :loading="saveLoading">保存</el-button>
            <el-button size="small" style="margin-left: 15px;" icon="el-icon-error">取消</el-button>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="listDiv">
        <div class="list-top">
          <el-button type="primary" icon="el-icon-plus" size="small">新建</el-button>
        </div>
        <div class="list-middle">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column v-for="item in tableTitle" :key="item.prop"
              :prop="item.prop"
              :label="item.label"
              :width="item.width">
            </el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
              width="320">
              <template slot-scope="scope">
                <el-link type="primary" icon="el-icon-edit">编辑</el-link>
                <el-link type="success" icon="el-icon-switch-button" style="margin-left: 10px;" v-if="!scope.row.isRunning">启动</el-link>
                <el-link type="success" icon="el-icon-loading" style="margin-left: 10px;" v-else>运行中</el-link>
                <el-link type="danger" icon="el-icon-error" style="margin-left: 10px;" :disabled="!scope.row.isRunning" @click="stop">停止</el-link>
                <el-link type="primary" icon="el-icon-success" style="margin-left: 10px;">完成</el-link>
                <el-link type="primary" icon="el-icon-pie-chart" style="margin-left: 10px;" @click="showDynamicGraph">动态图</el-link>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="list-bottom">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HttpUtil from '@/utils/HttpUtil'
import { ipcRenderer } from 'electron'
export default {
  name: "OrderList",
  components: {},
  props: {},
  data() {
    return {
      orderMainForm: {},
      tableTitle:[
        {prop:"orderId",label:"任务编号",width:"150"},{prop:"revertFlag",label:"翻转",width:"150"},
        {prop:"batchId",label:"批次编号",width:"150"},{prop:"orderNo",label:"订单编号",width:"150"},{prop:"orderName",label:"订单名称",width:"150"},
        {prop:"planNum",label:"计划数量",width:"150"},{prop:"productName",label:"产品名称",width:"150"},{prop:"loadMethod",label:"装载方式",width:"150"},
        {prop:"pathName",label:"路径名称",width:"150"},{prop:"artName",label:"工艺名称",width:"150"},{prop:"acceleratorKValue",label:"加速器k值",width:"150"}
      ],
      tableData: [],
      saveLoading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    async saveOrder() {
      this.saveLoading = true;
      this.orderMainForm.revertFlag = this.orderMainForm.revertFlag ? 1 : 0
      await HttpUtil.post('/order/save', this.orderMainForm).then((res)=> {
        if(res.data === 1) {
          this.$message.success('保存成功！');
          // 查询订单信息
          this.getOrderList();
        } else {
          this.$message.error('保存失败！');
        }
        this.saveLoading = false;
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.$message.error('保存失败！' + err);
        this.saveLoading = false;
      });
    },
    async getOrderList() {
      await HttpUtil.get('/order/getOrderList').then((res)=> {
        this.tableData = res.data
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.$message.error('查询失败！' + err);
      });
    },
    handleClick(){},
    showDynamicGraph() {
      this.$emit('replaceRoute','/homePage/dynamicGraph')
    },
    writeValuesToPLC() {
      // ipcRenderer.send('writeValuesToPLC', 'DBW6', 1);
      // DB101.DBW2 加速器设定输送速度
      ipcRenderer.send('writeValuesToPLC', 'DBW2', Number(this.orderMainForm.acceleratorKValue));
      this.sleep(50)
      // DB101.DBW8 启动输送线
      ipcRenderer.send('writeValuesToPLC', 'DBW8', 1);
      this.sleep(50)
      // 翻转&回流
      if(this.orderMainForm.revertFlag === 1) {
        // DB101.DBW12 翻转
        ipcRenderer.send('writeValuesToPLC', 'DBW12', 1);
        this.sleep(50)
        ipcRenderer.send('writeValuesToPLC', 'DBW14', 0);
      }  else {
        // DB101.DBW14 回流模式
        ipcRenderer.send('writeValuesToPLC', 'DBW14', 1);
        this.sleep(50)
        ipcRenderer.send('writeValuesToPLC', 'DBW12', 0);
      }
      this.sleep(50)
      // DB101.DBW22 纸箱宽度
      ipcRenderer.send('writeValuesToPLC', 'DBW22', Number(this.orderMainForm.boxWidth));
      this.sleep(50)
      // DB101.DBW24 纸箱长度
      ipcRenderer.send('writeValuesToPLC', 'DBW24', Number(this.orderMainForm.boxLength));
    },
    sleep(numberMillis) {
      var now = new Date();
      var exitTime = now.getTime() + numberMillis;
      while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
        return;
      }
    },
    stop() {
      ipcRenderer.send('writeValuesToPLC', 'DBW10', 1);
    }
  },
  created() {
    this.getOrderList()
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.orderlist {
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
    // backdrop-filter: blur(88px);
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
        padding: 10px 0px 0px 16px;
        box-sizing: border-box;
        .content-bottom {
          height: 48px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        // margin: 0;
        // padding: 0;
        // height: 100vh;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // // background-color: #efeeee;
        // gap: 30px;
        // .img {
        //     width: 100px;
        //     height: 100px;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     border-radius: 20px;
        //     box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),
        //     -18px -18px 30px rgba(255, 255, 255, 1);
        //     transition: all .2s ease-out;
        // }
        // img {
        //     width: 60px;
        //     transition: all .2s ease-out;
        // }
        // .img:hover{
        //     cursor: pointer;
        //     box-shadow: 0 0 0 rgba(0, 0, 0, 0.2),
        //     0 0 0 rgba(255, 255, 255, 0.8),
        //     inset 18px 18px 30px rgba(0, 0, 0, 0.1),
        //     inset -18px -18px 30px rgba(255, 255, 255, 1);
        // }
        // .img:hover img {
        //     width: 58px;
        // }
        ::v-deep .el-form-item {
          margin-bottom: 9px;
        }
        ::v-deep .el-form-item__label {
          color: black;
          padding: 0 2px 0 0;
          border-width: 1px;
          border-style: solid;
          border-radius: 2px 0 0 2px;
          background-color: #fafafa;
          border-color: #eee;
          box-sizing: border-box;
          overflow: hidden;
          height: 32px;
          line-height: 32px;
        }
        ::v-deep .el-form-item__content {
          line-height: 32px;
          .el-input {
            left: -1px;
          }
          .el-input__inner {
            border-radius: 0px;
            border: 1px #eee solid;
            width: 140px;
          }
        }
      }
    }
    ::v-deep .el-divider--horizontal{
      margin: 5px;
    }
    .listDiv {
      box-sizing: border-box;
      padding: 0px 16px;
      ::v-deep {
        .el-link [class*=el-icon-]+span {
          margin-left: 2px;
        }
      }
      .list-top {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .list-middle {
        height: calc(100% - 100px);
        width: 100%;
      }
      .list-bottom {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        padding-right: 1px;
      }
    }
  }
}
</style>