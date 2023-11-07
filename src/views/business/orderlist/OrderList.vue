<template>
  <div style="width: 100%;height: 100%;">
    <div class="orderlist" v-show="!isDynamicGraphShow">
      <div>
        <div class="formDiv">
          <div class="card-title">工艺参数</div>
          <div class="card-content">
            <el-form :inline="true" label-position="right" label-width="115px" :model="orderMainForm" class="demo-form-inline">
              <el-form-item label="订单编号：">
                <el-input size="small" v-model="orderMainForm.orderNo" placeholder="订单编号" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="订单名称：">
                <el-input size="small" v-model="orderMainForm.orderName" placeholder="订单名称" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="orderMainForm.revertFlag" :disabled="!(isNewSave || isEdit)">翻转</el-checkbox>
              </el-form-item>
              <br/>
              <el-form-item label="灭菌批号：">
                <el-input size="small" v-model="orderMainForm.batchId" placeholder="灭菌批号" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="产品名称：">
                <el-input size="small" v-model="orderMainForm.productName" placeholder="产品名称" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <!-- <el-form-item label="加速器k值：">
                <el-input size="small" v-model="orderMainForm.acceleratorKValue" placeholder="加速器k值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item> -->
              <el-form-item label="工艺名称：">
                <el-input size="small" v-model="orderMainForm.artName" placeholder="工艺名称" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="装载方式：">
                <el-input size="small" v-model="orderMainForm.loadMethod" placeholder="装载方式" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="路径名称：">
                <el-input size="small" v-model="orderMainForm.pathName" placeholder="路径名称" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="圈数：">
                <el-input type="number" size="small" v-model="orderMainForm.numberTurns" placeholder="圈数" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="箱子长度：">
                <el-input type="number" size="small" v-model="orderMainForm.boxLength" placeholder="箱子长度" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="箱子高度：">
                <el-input type="number" size="small" v-model="orderMainForm.boxWidth" placeholder="箱子高度" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="箱子宽度：">
                <el-input type="number" size="small" v-model="orderMainForm.boxHeight" placeholder="箱子宽度" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="箱子重量：">
                <el-input type="number" size="small" v-model="orderMainForm.boxWeight" placeholder="箱子重量" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="订单箱数：">
                <el-input type="number" size="small" v-model="orderMainForm.orderBoxNum" placeholder="订单箱数" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <!-- <el-form-item label="剔除箱数：">
                <el-input size="small" v-model="orderMainForm.eliminateBoxNum" placeholder="剔除箱数" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="上货箱数：">
                <el-input size="small" v-model="orderMainForm.exhibitBoxNum" placeholder="上货箱数" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="合格箱数：">
                <el-input size="small" v-model="orderMainForm.qualifiedBoxNum" placeholder="合格箱数" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item> -->
              <el-form-item label="束下速度下限：">
                <el-input type="number" size="small" v-model="orderMainForm.sxSpeedLowerLimit" placeholder="束下速度下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="束下速度值：">
                <el-input type="number" size="small" v-model="orderMainForm.sxSpeedSet" placeholder="束下速度值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="束下速度上限：">
                <el-input type="number" size="small" v-model="orderMainForm.sxSpeedUpperLimit" placeholder="束下速度上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="束流下限：">
                <el-input type="number" size="small" v-model="orderMainForm.slLowerLimit" placeholder="束流下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="束流设定值：">
                <el-input type="number" size="small" v-model="orderMainForm.slSet" placeholder="束流设定值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="束流上限：">
                <el-input type="number" size="small" v-model="orderMainForm.slUpperLimit" placeholder="束流上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="功率下限：">
                <el-input type="number" size="small" v-model="orderMainForm.glLowerLimit" placeholder="功率下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="功率设定值：">
                <el-input type="number" size="small" v-model="orderMainForm.glSet" placeholder="功率设定值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="功率上限：">
                <el-input type="number" size="small" v-model="orderMainForm.glUpperLimit" placeholder="功率上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="扫宽下限：">
                <el-input type="number" size="small" v-model="orderMainForm.skLowerLimit" placeholder="扫宽下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="扫宽设定值：">
                <el-input type="number" size="small" v-model="orderMainForm.skSet" placeholder="扫宽设定值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="扫宽上限：">
                <el-input type="number" size="small" v-model="orderMainForm.skUpperLimit" placeholder="扫宽上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="扫描频率下限：">
                <el-input type="number" size="small" v-model="orderMainForm.smplLowerLimit" placeholder="扫描频率下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="扫描频率设定：">
                <el-input type="number" size="small" v-model="orderMainForm.smplSet" placeholder="扫描频率设定" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="扫描频率上限：">
                <el-input type="number" size="small" v-model="orderMainForm.smplUpperLimit" placeholder="扫描频率上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="PFN电压下限：">
                <el-input type="number" size="small" v-model="orderMainForm.pfnLowerLimit" placeholder="PFN电压下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="PFN电压设定：">
                <el-input type="number" size="small" v-model="orderMainForm.pfnSet" placeholder="PFN电压设定" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="PFN电压上限：">
                <el-input type="number" size="small" v-model="orderMainForm.pfnUpperLimit" placeholder="PFN电压上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="能量下限：">
                <el-input type="number" size="small" v-model="orderMainForm.nlLowerLimit" placeholder="能量下限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="能量设定值：">
                <el-input type="number" size="small" v-model="orderMainForm.nlSet" placeholder="能量设定值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="能量上限：">
                <el-input type="number" size="small" v-model="orderMainForm.nlUpperLimit" placeholder="能量上限" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="操作员：">
                <el-input size="small" v-model="orderMainForm.creatorName" placeholder="操作员" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
            </el-form>
            <div class="content-bottom" v-show="isNewSave || isEdit">
              <el-button type="warning" plain size="small" v-if="isNewSave" style="margin-right: 6px;">
                <i class="iconfont icon-saoma" style="font-size: 12px;"></i>
                扫码添加
              </el-button>
              <el-divider direction="vertical" style="height: 1.2em;" v-if="isNewSave"></el-divider>
              <el-button type="primary" style="margin-left: 6px;" size="small" icon="el-icon-success" @click="saveOrder" :loading="saveLoading" v-if="isNewSave">保存</el-button>
              <el-button type="primary" size="small" icon="el-icon-success" @click="updateOrder" :loading="editLoading" v-else>修改</el-button>
              <el-button size="small" style="margin-left: 15px;" icon="el-icon-error" @click="cancelEditOrSave">取消</el-button>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="listDiv">
          <div class="list-top">
            <el-button type="primary" icon="el-icon-plus" size="small" @click="newOrderClick">新建</el-button>
            <el-button icon="el-icon-refresh-right" size="small" @click="getOrderList" style="margin-left: 15px;margin-right: 6px;">刷新</el-button>
            <el-divider direction="vertical" style="height: 1.2em;" v-if="nowRunOrderId != ''"></el-divider>
            <el-tooltip content="点击快速定位到运行订单→" placement="top" v-if="nowRunOrderId != ''">
              <el-button type="primary" plain size="small" icon="el-icon-loading" style="margin-left: 6px;" @click="positionOrder">当前正在运行的订单：{{ nowRunOrderId }}</el-button>
            </el-tooltip>
          </div>
          <div class="list-middle" ref="listMiddle">
            <el-table
              :data="tableData"
              ref="singleTable"
              border
              style="width: 100%"
              :max-height="tableMaxHeight"
              highlight-current-row
              @current-change="handleCurrentChange"
              v-loading="getOrderListLoading">
              <el-table-column type="index" width="80" :index="indexMethod" fixed="left" label="序号">
              </el-table-column>
              <el-table-column v-for="item in tableTitle"
                :key="item.prop"
                :prop="item.prop"
                :label="item.label"
                :width="item.width">
              </el-table-column>
              <el-table-column
                prop="tag"
                label="来源"
                width="100"
                fixed="right">
                <template>
                  <el-tag type="success" disable-transitions>手动</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template slot-scope="scope">
                  <el-link type="primary" icon="el-icon-edit" @click.stop="editClick(scope.row)">编辑</el-link>
                  <el-link type="success" icon="el-icon-pie-chart" style="margin-left: 15px;" @click="showDynamicGraph(scope.row)" :disabled="(scope.row.orderId !== currentSelect.orderId) || (nowRunOrderId != '' && scope.row.orderId != nowRunOrderId) || nowRunOrderId == ''">动态图</el-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div style="width:100%;height: 100%;" v-if="isDynamicGraphShow">
      <DynamicGraph @closeDynamicGraphShow="closeDynamicGraphShow" ref="dynamicGraph"></DynamicGraph>
    </div>
  </div>
  
</template>

<script>
import HttpUtil from '@/utils/HttpUtil'
import DynamicGraph from '../dynamicgraph/DynamicGraph.vue'
export default {
  name: "OrderList",
  components: {
    DynamicGraph
  },
  props: {},
  data() {
    return {
      orderMainForm: {},
      tableTitle:[
        {prop:"orderId",label:"任务编号",width:"200"},{prop:"revertFlag",label:"翻转",width:"150"},
        {prop:"batchId",label:"灭菌批号",width:"150"},{prop:"orderNo",label:"订单编号",width:"150"},{prop:"orderName",label:"订单名称",width:"150"},
        {prop:"planNum",label:"计划数量",width:"150"},{prop:"productName",label:"产品名称",width:"150"},{prop:"loadMethod",label:"装载方式",width:"150"},
        {prop:"pathName",label:"路径名称",width:"150"},{prop:"artName",label:"工艺名称",width:"150"},{prop:"acceleratorKValue",label:"加速器k值",width:"150"}
      ],
      tableData: [],
      saveLoading: false,
      editLoading: false,
      isEdit: false,
      isNewSave: false,
      currentSelect: {},
      isDynamicGraphShow: false,
      getOrderListLoading: false,
      nowRunOrderId: '',
      tableMaxHeight: 0,
      pollingST: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    cancelEditOrSave() {
      this.isNewSave = false;
      this.isEdit = false;
    },
    newOrderClick() {
      this.isNewSave = true;
      this.orderMainForm = {};
    },
    editClick(val) {
      this.isEdit = true;
      this.orderMainForm = JSON.parse(JSON.stringify(val));
      this.orderMainForm.revertFlag = this.orderMainForm.revertFlag == '翻转' ? true : false
      this.currentSelect = val;
      // alert(JSON.stringify(orderMain))
    },
    async saveOrder() {
      if(this.orderMainForm.orderNo == '' || this.orderMainForm.orderNo == undefined ) {
        this.$message.error('订单编号必须填写！');
        return false;
      }
      if(this.orderMainForm.batchId == '' || this.orderMainForm.batchId == undefined ) {
        this.$message.error('灭菌批号必须填写！');
        return false;
      }
      this.saveLoading = true;
      this.orderMainForm.revertFlag = this.orderMainForm.revertFlag ? '1' : '0'
      await HttpUtil.post('/order/save', this.orderMainForm).then((res)=> {
        if(res.data === 1) {
          this.$message.success('保存成功！');
          // 查询订单信息
          this.getOrderList();
        } else {
          this.$message.error('保存失败，请检查信息是否填写完整！');
        }
        this.saveLoading = false;
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.$message.error('保存失败，请检查信息是否填写完整！' + err);
        this.saveLoading = false;
      });
    },
    async updateOrder() {
      this.editLoading = true;
      this.orderMainForm.revertFlag = this.orderMainForm.revertFlag ? '1' : '0'
      await HttpUtil.post('/order/update', this.orderMainForm).then((res)=> {
        if(res.data === 1) {
          this.$message.success('修改成功！');
          // 查询订单信息
          this.getOrderList();
        } else {
          this.$message.error('修改失败！');
        }
        this.editLoading = false;
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.$message.error('修改失败！' + err);
        this.editLoading = false;
      });
    },
    async getOrderList() {
      this.getOrderListLoading = true
      await HttpUtil.get('/order/getOrderList').then((res)=> {
        this.tableData = res.data
        this.tableData.forEach(item => {
          item.revertFlag = item.revertFlag == '1' ? '翻转' : ''
        })
        this.orderMainForm = {};
        this.isNewSave = false;
        this.isEdit = false;
        setTimeout(() => {
          this.getOrderListLoading = false
        }, 500);
      }).catch((err)=> {
        setTimeout(() => {
          this.getOrderListLoading = false
        }, 500);
        // 网络异常 稍后再试
        this.$message.error('查询失败！' + err);
      });
      // this.tableData = [{revertFlag: '翻转', orderId: '202306160001', orderName: '威高一次性管路'}];
    },
    getNowRunOrder() {
      HttpUtil.get('/order/getNowRunOrder').then( async (res)=> {
        if(res.data != null) {
          this.nowRunOrderId = res.data.orderId;
        } else {
          this.nowRunOrderId = '';
        }
        this.pollingST = setTimeout(() => {
          clearTimeout(this.pollingST)
          this.getNowRunOrder();
        }, 1000)
      }).catch((err)=> {
        this.pollingST = setTimeout(() => {
          clearTimeout(this.pollingST)
          this.getNowRunOrder();
        }, 1000)
      });
    },
    showDynamicGraph(obj) {
      this.isDynamicGraphShow = true;
      this.$nextTick(() => {
        this.$refs.dynamicGraph.showOrderInfo(obj);
      });
    },
    closeDynamicGraphShow() {
      this.isDynamicGraphShow = false
    },
    indexMethod(index) {
      return index + 1;
    },
    handleCurrentChange(val) {
      if(val != null) {
        this.orderMainForm = JSON.parse(JSON.stringify(val));
        this.orderMainForm.revertFlag = this.orderMainForm.revertFlag == '翻转' ? true : false
        this.currentSelect = val;
        this.isNewSave = false;
        this.isEdit = false;
      }
    },
    positionOrder() {
      // 通过 nowRunOrderId 定位当前运行订单在tableData的index
      const index = this.tableData.findIndex(element => element.orderId == this.nowRunOrderId);
      this.$nextTick(() => {
        this.$refs.singleTable.setCurrentRow(this.tableData[index]);
      });
    },
    autoCalMaxHeight() {
      this.tableMaxHeight = this.$refs.listMiddle.offsetHeight - 55;
    }
  },
  created() {
    this.getOrderList()
  },
  mounted() {
    this.$nextTick(() => {
      this.tableMaxHeight = this.$refs.listMiddle.offsetHeight - 55;
      window.addEventListener('resize', this.autoCalMaxHeight);
    })
    this.getNowRunOrder()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.autoCalMaxHeight);
  }
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
            padding-right: 0px;
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
      height: calc(100% - 330px);
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
        height: calc(100% - 50px);
        width: 100%;
      }
    }
  }
}
</style>