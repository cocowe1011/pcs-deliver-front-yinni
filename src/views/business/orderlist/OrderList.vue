<template>
  <div style="width: 100%;height: 100%;">
    <div class="orderlist" v-show="!isDynamicGraphShow">
      <div>
        <div class="formDiv">
          <div class="card-title">{{ $t('processParameters.title') }}</div>
          <div class="card-content">
            <el-form :inline="true" label-position="right" label-width="115px" :model="orderMainForm" class="demo-form-inline">
              <el-form-item :label="$t('processParameters.dingdanbianhao') + '：'">
                <el-input size="small" v-model="orderMainForm.orderNo" :placeholder="$t('processParameters.dingdanbianhao')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.dingdanmingcheng') + '：'">
                <el-input size="small" v-model="orderMainForm.orderName" :placeholder="$t('processParameters.dingdanmingcheng')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="orderMainForm.photoFlag" :disabled="!(isNewSave || isEdit)">{{ $t('processParameters.paizhao') }}</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="orderMainForm.revertFlag" :disabled="!(isNewSave || isEdit) || ((isNewSave || isEdit) && orderMainForm.trayFlag)">{{ $t('processParameters.fanzhuan') }}</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="orderMainForm.trayFlag" :disabled="!(isNewSave || isEdit) || ((isNewSave || isEdit) &&orderMainForm.revertFlag)">{{ $t('processParameters.tuopan') }}</el-checkbox>
              </el-form-item>
              <br/>
              <el-form-item :label="$t('processParameters.miejunpihao') + '：'">
                <el-input size="small" v-model="orderMainForm.batchId" :placeholder="$t('processParameters.miejunpihao')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.chanpinmingcheng') + '：'">
                <el-input size="small" v-model="orderMainForm.productName" :placeholder="$t('processParameters.chanpinmingcheng')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <!-- <el-form-item label="加速器k值：">
                <el-input size="small" v-model="orderMainForm.acceleratorKValue" placeholder="加速器k值" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item> -->
              <el-form-item :label="$t('processParameters.gongyimingcheng') + '：'">
                <el-input size="small" v-model="orderMainForm.artName" :placeholder="$t('processParameters.gongyimingcheng') " :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.zhuangzaifangshi') + '：'">
                <el-input size="small" v-model="orderMainForm.loadMethod" :placeholder="$t('processParameters.zhuangzaifangshi') " :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.lujingmingcheng') + '：'">
                <el-input size="small" v-model="orderMainForm.pathName" :placeholder="$t('processParameters.lujingmingcheng')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.quanshu') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.numberTurns" :placeholder="$t('processParameters.quanshu')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.xiangzichangdu') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.boxLength" :placeholder="$t('processParameters.xiangzichangdu')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.xiangzigaodu') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.boxWidth" :placeholder="$t('processParameters.xiangzigaodu')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.xiangzikuandu') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.boxHeight" :placeholder="$t('processParameters.xiangzikuandu')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.xiangzizhongliang') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.boxWeight" :placeholder="$t('processParameters.xiangzizhongliang') " :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item label="订单箱数：" v-show="false">
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
              <el-form-item :label="$t('processParameters.shuxiasuduxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.sxSpeedLowerLimit" :placeholder="$t('processParameters.shuxiasuduxiaxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.shuxiasuduzhi') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.sxSpeedSet" :placeholder="$t('processParameters.shuxiasuduzhi')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.shuxiasudushangxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.sxSpeedUpperLimit" :placeholder="$t('processParameters.shuxiasudushangxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.shuliuxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.slLowerLimit" :placeholder="$t('processParameters.shuliuxiaxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.shuliusheding') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.slSet" :placeholder="$t('processParameters.shuliusheding')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.shuliushangxina') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.slUpperLimit" :placeholder="$t('processParameters.shuliushangxina')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.gonglvxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.glLowerLimit" :placeholder="$t('processParameters.gonglvxiaxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.gonglvsheding') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.glSet" :placeholder="$t('processParameters.gonglvsheding')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.gonglvshangxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.glUpperLimit" :placeholder="$t('processParameters.gonglvshangxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.saokuanxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.skLowerLimit" :placeholder="$t('processParameters.saokuanxiaxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.saokuansheding') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.skSet" :placeholder="$t('processParameters.saokuansheding')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.saokuanshangxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.skUpperLimit" :placeholder="$t('processParameters.saokuanshangxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.saomiaopinlvxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.smplLowerLimit" :placeholder="$t('processParameters.saomiaopinlvxiaxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.saomiaopinlvsheding') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.smplSet" :placeholder="$t('processParameters.saomiaopinlvsheding')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.saomiaopinlvshangxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.smplUpperLimit" :placeholder="$t('processParameters.saomiaopinlvshangxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.pfnxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.pfnLowerLimit" :placeholder="$t('processParameters.pfnxiaxian') " :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.pfnsheding') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.pfnSet" :placeholder="$t('processParameters.pfnsheding')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.pfnshangxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.pfnUpperLimit" :placeholder="$t('processParameters.pfnshangxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.nengliangxiaxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.nlLowerLimit" :placeholder="$t('processParameters.nengliangxiaxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.nengliangshedingzhi') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.nlSet" :placeholder="$t('processParameters.nengliangshedingzhi')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.nengliangshangxian') + '：'">
                <el-input type="number" size="small" v-model="orderMainForm.nlUpperLimit" :placeholder="$t('processParameters.nengliangshangxian')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
              <el-form-item :label="$t('processParameters.caozuoyuan') + '：'">
                <el-input size="small" v-model="orderMainForm.creatorName" :placeholder="$t('processParameters.caozuoyuan')" :readonly="!(isNewSave || isEdit)"></el-input>
              </el-form-item>
            </el-form>
            <div class="content-bottom" v-show="isNewSave || isEdit">
              <el-button type="warning" plain size="small" v-if="isNewSave" style="margin-right: 6px;">
                <i class="iconfont icon-saoma" style="font-size: 12px;"></i>
                {{ $t('orderList.scanCode') }}
              </el-button>
              <el-divider direction="vertical" style="height: 1.2em;" v-if="isNewSave"></el-divider>
              <el-button type="primary" style="margin-left: 6px;" size="small" icon="el-icon-success" @click="saveOrder" :loading="saveLoading" v-if="isNewSave">{{ $t('orderList.save') }}</el-button>
              <el-button type="primary" size="small" icon="el-icon-success" @click="updateOrder" :loading="editLoading" v-else>{{ $t('orderList.update') }}</el-button>
              <el-button size="small" style="margin-left: 15px;" icon="el-icon-error" @click="cancelEditOrSave">{{ $t('orderList.cancel') }}</el-button>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="listDiv">
          <div class="list-top">
            <el-button type="primary" icon="el-icon-plus" size="small" @click="newOrderClick">{{ $t('orderList.xinjian') }}</el-button>
            <el-button icon="el-icon-refresh-right" size="small" @click="getOrderList" style="margin-left: 15px;margin-right: 6px;">{{ $t('orderList.refresh') }}</el-button>
            <el-divider direction="vertical" style="height: 1.2em;" v-if="nowRunOrderId != ''"></el-divider>
            <el-tooltip :content="$t('orderList.dingwei')" placement="top" v-if="nowRunOrderId != ''">
              <el-button type="primary" plain size="small" icon="el-icon-loading" style="margin-left: 6px;" @click="positionOrder">{{ $t('orderList.nowOrderTip') }}{{ nowRunOrderId }}</el-button>
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
              <el-table-column type="index" width="80" :index="indexMethod" fixed="left" :label="$t('orderList.xuhao')">
              </el-table-column>
              <el-table-column v-for="item in tableTitle"
                :key="item.prop"
                :prop="item.prop"
                :label="item.label"
                :width="item.width">
              </el-table-column>
              <el-table-column
                prop="tag"
                :label="$t('orderList.laiyuan')"
                width="100"
                fixed="right">
                <template>
                  <el-tag type="success" disable-transitions>{{ $t('orderList.shoudong') }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template slot-scope="scope">
                  <el-link type="primary" icon="el-icon-edit" @click.stop="editClick(scope.row)">{{ $t('orderList.bianji') }}</el-link>
                  <el-link type="success" icon="el-icon-pie-chart" style="margin-left: 15px;" @click="showDynamicGraph(scope.row)" :disabled="(scope.row.orderId !== currentSelect.orderId) || (nowRunOrderId != '' && scope.row.orderId != nowRunOrderId) || nowRunOrderId == ''">{{ $t('orderList.dongtaitu') }}</el-link>
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
        {prop:"orderId",label: this.$t('orderList.tableTitle.orderId'),width:"200"},
        {prop:"revertFlag",label: this.$t('orderList.tableTitle.revertFlag'),width:"150"},
        {prop:"batchId",label: this.$t('orderList.tableTitle.batchId'),width:"150"},
        {prop:"orderNo",label: this.$t('orderList.tableTitle.orderNo'),width:"150"},
        {prop:"orderName",label: this.$t('orderList.tableTitle.orderName'),width:"150"},
        {prop:"planNum",label: this.$t('orderList.tableTitle.planNum'),width:"150"},
        {prop:"productName",label: this.$t('orderList.tableTitle.productName'),width:"150"},
        {prop:"loadMethod",label: this.$t('orderList.tableTitle.loadMethod'),width:"150"},
        {prop:"pathName",label: this.$t('orderList.tableTitle.pathName'),width:"150"},
        {prop:"artName",label: this.$t('orderList.tableTitle.artName'),width:"150"}
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
      this.orderMainForm.trayFlag = this.orderMainForm.trayFlag == '1' ? true : false
      this.orderMainForm.photoFlag = this.orderMainForm.photoFlag == '1' ? true : false
      this.currentSelect = val;
      // alert(JSON.stringify(orderMain))
    },
    async saveOrder() {
      if(this.orderMainForm.orderNo == '' || this.orderMainForm.orderNo == undefined ) {
        this.$message.error(this.$i18n.locale === 'zh'?'订单编号必须填写！':'Order number must be filled in!');
        return false;
      }
      if(this.orderMainForm.batchId == '' || this.orderMainForm.batchId == undefined ) {
        this.$message.error(this.$i18n.locale === 'zh'?'灭菌批号必须填写！':'Batch number must be filled in!');
        return false;
      }
      this.saveLoading = true;
      this.orderMainForm.revertFlag = this.orderMainForm.revertFlag ? '1' : '0'
      this.orderMainForm.trayFlag = this.orderMainForm.trayFlag ? '1' : '0'
      this.orderMainForm.photoFlag = this.orderMainForm.photoFlag ? '1' : '0'
      await HttpUtil.post('/order/save', this.orderMainForm).then((res)=> {
        if(res.data === 1) {
          this.$message.success(this.$i18n.locale === 'zh'?'保存成功！':'Save successful!');
          // 查询订单信息
          this.getOrderList();
        } else {
          this.orderMainForm.revertFlag = this.orderMainForm.revertFlag == '1' ? true : false
          this.orderMainForm.trayFlag = this.orderMainForm.trayFlag == '1' ? true : false
          this.orderMainForm.photoFlag = this.orderMainForm.photoFlag == '1' ? true : false
          this.$message.error(this.$i18n.locale === 'zh'?'保存失败，请检查信息是否填写完整！':'Save failed. Please check if all information is filled in completely!');
        }
        this.saveLoading = false;
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.orderMainForm.revertFlag = this.orderMainForm.revertFlag == '1' ? true : false
        this.orderMainForm.trayFlag = this.orderMainForm.trayFlag == '1' ? true : false
        this.orderMainForm.photoFlag = this.orderMainForm.photoFlag == '1' ? true : false
        this.$message.error(this.$i18n.locale === 'zh'?'保存失败，请检查信息是否填写完整！':'Save failed. Please check if all information is filled in completely!' + err);
        this.saveLoading = false;
      });
    },
    async updateOrder() {
      this.editLoading = true;
      this.orderMainForm.revertFlag = this.orderMainForm.revertFlag ? '1' : '0'
      this.orderMainForm.trayFlag = this.orderMainForm.trayFlag ? '1' : '0'
      this.orderMainForm.photoFlag = this.orderMainForm.photoFlag ? '1' : '0'
      await HttpUtil.post('/order/update', this.orderMainForm).then((res)=> {
        if(res.data === 1) {
          this.$message.success(this.$i18n.locale === 'zh'?'修改成功！':'Modification successful!');
          // 查询订单信息
          this.getOrderList();
        } else {
          this.orderMainForm.revertFlag = this.orderMainForm.revertFlag == '1' ? true : false
          this.orderMainForm.trayFlag = this.orderMainForm.trayFlag == '1' ? true : false
          this.orderMainForm.photoFlag = this.orderMainForm.photoFlag == '1' ? true : false
          this.$message.error(this.$i18n.locale === 'zh'?'修改失败！':'Modification failed!');
        }
        this.editLoading = false;
      }).catch((err)=> {
        // 网络异常 稍后再试
        this.orderMainForm.revertFlag = this.orderMainForm.revertFlag == '1' ? true : false
        this.orderMainForm.trayFlag = this.orderMainForm.trayFlag == '1' ? true : false
        this.orderMainForm.photoFlag = this.orderMainForm.photoFlag == '1' ? true : false
        this.$message.error(this.$i18n.locale === 'zh'?'修改失败！':'Modification failed!' + err);
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
        this.$message.error(this.$i18n.locale === 'zh'?'查询失败！':'Query failed!' + err);
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
        this.orderMainForm.trayFlag = this.orderMainForm.trayFlag == '1' ? true : false
        this.orderMainForm.photoFlag = this.orderMainForm.photoFlag == '1' ? true : false
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