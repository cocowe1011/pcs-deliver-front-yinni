<template>
  <div class="dynamic">
    <el-button type="danger" icon="el-icon-close" style="position: absolute;z-index: 999;right: 35px;top: 70px;" @click="closeDynamicGraphShow"></el-button>
    <div class="dynamic-left">
      <div class="dynamic-left-top">
        <div>
          <div class="card-title">运行订单信息</div>
          <div class="card-content">
            <div class="data-card" style="padding:14px 10px 7px 20px">
              <div class="data-card-border">
                <div class="data-card-border-borderTop granient-text">订单号</div>
                <div class="data-card-border-borderDown" style="font-size: 1.3vw;">{{ orderMainDy.orderNo }}</div>
              </div>
            </div>
            <div class="data-card" style="padding:14px 14px 7px 6px">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">货物名称</div>
                <div class="data-card-border-borderDown">{{ orderMainDy.productName }}</div>
              </div>
            </div>
            <div class="data-card" style="padding: 10px 10px 7px 20px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">模拟id号</div>
                <div class="data-card-border-borderDown">{{ boxImitateId }}</div>
              </div>
            </div>
            <div class="data-card" style="padding: 10px 14px 7px 6px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">扫码信息</div>
                <div class="data-card-border-borderDown">{{ loadScanCode }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dynamic-left-down">
        <div>
          <div class="card-title">
            工艺要求
          </div>
          <div class="card-content">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.numberTurns.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    圈数
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.boxLength.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    箱子长度
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.boxHeight.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    箱子高度
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.boxWidth.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    箱子宽度
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.boxWeight.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    箱子重量
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.orderBoxNum.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    订单箱数
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.sxSpeedLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    束下速度下限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.sxSpeedSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    束下速度值
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.sxSpeedUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    束下速度上限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.slLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    束流下限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.slSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    束流设定值
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.slUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    束流上限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.glLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    功率下限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.glSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    功率设定值
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.glUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    功率上限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.skLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    扫宽下限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.skSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    扫宽设定值
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.skUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    扫宽上限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.smplLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    扫描频率下限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.smplSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    扫描频率设定
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.smplUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    扫描频率上限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.pfnLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    PFN电压下限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.pfnSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    PFN电压设定
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.pfnUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    PFN电压上限
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.nlLowerLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    能量下限
                  </div>
                  <!-- <el-statistic group-separator="," :precision="2" :value="" title=""></el-statistic> -->
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.nlSet.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    能量设定值
                  </div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="gongyi-card">
                  <div class="gongyi-card-top">
                    {{ orderMainDy.numberTurns == undefined?'': orderMainDy.nlUpperLimit.toFixed(0) }}
                  </div>
                  <div class="gongyi-card-down">
                    能量上限
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="dynamic-right">
      <div>
        <div class="card-title">箱报告实时预览</div>
        <div class="card-content" style="box-sizing: border-box; padding: 20px 10px 20px 10px;" v-loading="pdfLoading">
          <embed style="width: 100%;height:100%" :src="pdfPath" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/utils/EventBus'
import { Debugger, ipcRenderer } from 'electron'
import HttpUtil from '@/utils/HttpUtil'
import moment from 'moment';
import grwebapp from '@/utils/grwebapp'
export default {
  name: "DynamicGraph",
  components: {},
  props: {},
  data() {
    return {
      // 当前运行订单对象
      orderMainDy: {},
      pdfPath: '',
      pollingSTDy: null,
      boxIdNow: '',
      boxReportPath: 'D://pcs_temp_data/report/boxreport.grf',
      printObj: {recordset:[]},
      openPdf: null,
      pdfLoading: false,
      boxObj: {},
      loadScanCode: '',
      boxImitateId: ''
    };
  },
  watch: {},
  computed: {},
  methods: {
    showOrderInfo(orderMain) {
      this.orderMainDy = JSON.parse(JSON.stringify(orderMain))
    },
    getNewBoxReport() {
      // 通过订单号，查询最新一次的箱报告
      const param = {
        orderId: this.orderMainDy.orderId
      }
      HttpUtil.post('/box/getBoxReportLatest', param).then((res)=> {
        if(res.data != null) {
          if(res.data.boxId != this.boxIdNow) {
            // 最新的箱子变化了
            this.boxIdNow = res.data.boxId;
            this.boxObj = res.data;
            this.pdfLoading = true;
            this.pdfPath = ''
            this.printObj.recordset = [res.data];
            this.generatePDF(this.printObj, this.boxReportPath)
            this.openPdf = setTimeout(() => {
              this.pdfPath = 'D://pcs_temp_data/report/temp/temp.pdf'
              this.pdfLoading = false;
              this.loadScanCode = this.boxObj.loadScanCode,
              this.boxImitateId = this.boxObj.boxImitateId
            }, 2000);
          }
        } else {
          this.pdfPath = '';
        }
        this.pollingSTDy = setTimeout(() => {
          clearTimeout(this.pollingSTDy)
          this.getNewBoxReport();
        }, 1000)
      }).catch((err)=> {
        this.pollingSTDy = setTimeout(() => {
          clearTimeout(this.pollingSTDy)
          this.getNewBoxReport();
        }, 1000)
      });
    },
    generatePDF(printObj, reportPath) {
      console.log(printObj)
      console.log(reportPath)
      var args = {
        type: "pdf",
        report: grwebapp.urlAddRandomNo(reportPath),
        //实际应用中，data应该为程序中通过各种途径获取到的数据，最后要将数据转换为报表需要的XML或JSON格式的字符串数据
        data: printObj,
        showOptionDlg: false,  //指定不显示导出选项对话框
        filename: "d:\\pcs_temp_data\\report\\temp\\temp.pdf", //指定导出的文件路径与文件名
        open: false  //指定导出后不自动打开文件
      };
      grwebapp.webapp_ws_ajax_run(args);
    },
    closeDynamicGraphShow() {
      this.$emit('closeDynamicGraphShow')
    }
  },
  created() {
  },
  mounted() {
    this.getNewBoxReport()
  },
  beforeDestroy() {
    clearTimeout(this.pollingSTDy)
  }
};
</script>
<style lang="less" scoped>
.dynamic {
  width: 100%;
  height: 100%;
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
    padding-left: 18px;
  }
  .card-content {
    height: calc(100% - 37px);
    width: 100%;
    .data-card {
      width: 50%;
      height: 108px;
      float: left;
      box-sizing: border-box;
      padding: 5px 10px 5px 10px;
      &-border {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: rgba(40, 37, 59, 1);
        box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.25);
        &-borderTop {
          font-weight: 400;
          letter-spacing: 0px;
          color: rgba(189, 189, 189, 1);
          text-align: left;
          vertical-align: top;
          font-size: 14px;
          line-height: 38px;
          padding-left: 14px;
        }
        .granient-text {
          background-image: linear-gradient(to right, rgba(72, 146, 254, 1) , rgba(71, 207, 245, 1));
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .granient-text-order {
          background-image: linear-gradient(to right, rgba(112, 225, 245, 1) , rgba(255, 209, 148, 1));
          // background-image: linear-gradient(to right, rgba(255, 95, 109, 1) , rgba(255, 195, 113, 1));
          
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        &-borderDown {
          font-weight: 700;
          letter-spacing: 0px;
          color: rgba(255, 255, 255, 1);
          text-align: left;
          vertical-align: top;
          font-size: 28px;
          line-height: 32px;
          padding-left: 14px;
        }
      }
    }
  }
  &-left{
    width: 820px;
    height: 100%;
    float: left;
    &-top {
      height: 288px;
      width: 100%;
      float: left;
      box-sizing: border-box;
      padding: 15px 15px 7.5px 15px;
      > div {
        width: 100%;
        height: 100%;
        opacity: 1;
        border-radius: 20px;
        background: rgba(246, 247, 251, 0.56);
        box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(88px);
      }
    }
    &-down {
      height: calc(100% - 288px);
      width: 100%;
      float: left;
      box-sizing: border-box;
      padding: 7.5px 15px 15px 15px;
      > div {
        width: 100%;
        height: 100%;
        opacity: 1;
        border-radius: 20px;
        background: #ecf0f9;
        box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(88px);
        .gongyi-card {
          height: 70px;
          border: 1px dashed #b3d8ff;
          background-color: #ecf5ff;
          color: #409eff;
          overflow: hidden;
          transition: .3s;
          margin-top: 18px;
          border-radius: 4px;
          cursor: pointer;
          .gongyi-card-top {
            height: 32px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            font-weight: 900
          }
          .gongyi-card-down {
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .gongyi-card:hover {
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        }
      }
      // 滚动槽样式定义
      ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #28253b !important;
      }

      ::-webkit-scrollbar-thumb:window-inactive {
        background-color: #28253b !important;
      }
      .card-content {
        padding: 6px 6px 0px 6px;
        overflow: auto;
        box-sizing: border-box;
      }
      .log-text {
        line-height: 23px;
        padding-left: 18px;
        color: rgba(0, 0, 0, 1);
        margin-top: 9px;
      }
    }
  }
  &-right{
    width: calc(100% - 820px);
    // width: 100%;
    height: 100%;
    float: left;
    padding: 15px 15px 15px 0px;
    box-sizing: border-box;
    > div {
      width: 100%;
      height: 100%;
      opacity: 1;
      border-radius: 20px;
      background: rgba(246, 247, 251, 0.56);
      box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(88px);
    }
  }
  .like {
    cursor: pointer;
    font-size: 25px;
    display: inline-block;
  }
  ::v-deep {
    .el-row {
      margin-right: 0px !important;
      margin-left: 0px !important;
      margin-bottom: 0px !important;
      margin-top: -10px !important;
    }
    .el-statistic {
      margin-top: 30px;
      .head {
        font-size: 16px;
        font-weight: 600;
        color: #000000;
      }
      .con {
        color: #303133;
      }
    }
  }
}
</style>