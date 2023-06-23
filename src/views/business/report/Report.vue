<template>
  <div style="width: 100%;height: 100%;">
    <div class="orderlist">
      <div>
        <div class="formDiv">
          <div class="card-title"><el-divider content-position="left">报表设计</el-divider></div>
          <div class="card-content">
            <div @click="getData">打印预览箱报告</div>
            <div @click="getDataPi">打印预览批报告</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="listDiv">
          <el-divider content-position="left">报表查询</el-divider>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import HttpUtil from '@/utils/HttpUtil'
import { Debugger, ipcRenderer } from 'electron'
import grwebapp from '@/utils/grwebapp'
export default {
  name: "Report",
  components: {},
  props: {},
  data() {
    return {
      printObj: {recordset:[]}
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getDataPi() {
      await HttpUtil.post('/order/getOrderMainReport').then((res)=> {
        this.printObj.recordset = res.data
        this.printView(this.printObj, "D://batchReport.grf")
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.$message.error('查询失败！' + err);
      });
    },
    async getData() {
      await HttpUtil.post('/box/getBoxReport').then((res)=> {
        this.printObj.recordset = res.data
        this.printView(this.printObj, "D://boxreport.grf")
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.$message.error('查询失败！' + err);
      });
    },
    printView(printObj, reportPath) {
      console.log(printObj)
      var args = {
        type: "preview", //设置不同的属性可以执行不同的任务，如：preview print pdf xls csv txt rtf img grd
        report: grwebapp.urlAddRandomNo(reportPath),
        PrinterName: "XP-58", //指定要输出的打印机名称
        showOptionDlg: false,
        //实际应用中，data应该为程序中通过各种途径获取到的数据，最后要将数据转换为报表需要的XML或JSON格式的字符串数据
        data: printObj
      };
      grwebapp.webapp_ws_ajax_run(args);
    }
  },
  created() {
    grwebapp.webapp_urlprotocol_startup();
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
      }
    }
    ::v-deep .el-divider--horizontal{
      margin: 5px;
    }
    .listDiv {
      box-sizing: border-box;
      padding: 0px 16px;
    }
  }
}
</style>