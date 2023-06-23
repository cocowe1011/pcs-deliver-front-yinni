<template>
  <div style="width: 100%;height: 100%;">
    <div class="orderlist">
      <div>
        <div class="formDiv">
          <div class="card-title">报表设计</div>
          <div class="card-content">
            <div>箱报告模板<el-input placeholder="文件路径" v-model="boxReportPath" style="width: 300px;margin-left: 10px;" size="small" readonly></el-input><el-button style="margin-left: 10px;" size="small">箱设计</el-button></div>
            <div>批报告模板<el-input placeholder="文件路径" v-model="orderReportPath" style="width: 300px;margin-left: 10px;" size="small" readonly></el-input><el-button style="margin-left: 10px;" size="small">批设计</el-button></div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="listDiv">
          <div class="search">
            <span>订单编号</span>
            <el-input placeholder="请输入订单编号" style="width: 200px;margin-left: 10px;" size="small"></el-input>
            <span style="margin-left: 10px;">箱编号</span>
            <el-input placeholder="请输入箱编号" style="width: 200px;margin-left: 10px;" size="small"></el-input>
            <el-button style="margin-left: 10px;" size="small" type="primary">查询</el-button>
          </div>
          <div class="tableDiv">
            <el-table
              :data="tableData1"
              border
              style="width: 100%">
              <el-table-column type="index" width="80" :index="indexMethod" fixed="left" label="序号">
              </el-table-column>
              <el-table-column
                prop="date"
                label="任务编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="订单日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="订单编号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="订单名称">
              </el-table-column>
              <el-table-column
                prop="address"
                label="批次编号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="箱编号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="上货时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="合格">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template>
                  <el-link type="primary" icon="el-icon-tickets">批报告</el-link>
                  <el-link type="primary" icon="el-icon-receiving" style="margin-left: 15px;">箱报告</el-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- <div @click="getData">打印预览箱报告</div>
          <div @click="getDataPi">打印预览批报告</div> -->
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
      printObj: {recordset:[]},
      boxReportPath: 'D://CSS/箱报告报表.grf',
      orderReportPath: 'D://CSS/批报告报表.grf',
      tableData1: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        hasChildren: true
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
    },
    indexMethod(index) {
      return index + 1;
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
    ::v-deep .el-divider--horizontal{
      margin: 5px;
    }
    .listDiv {
      box-sizing: border-box;
      padding: 0px 16px;
      .search {
        height: 43px;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
        box-sizing: border-box;
        padding: 0px 16px;
        margin-bottom: 5px;
      }
      .tableDiv {
        height: calc(100% - 43px);
        width: 100%;
      }
    }
  }
}
</style>