<template>
  <div class="orderlist">
    <div>
      <div class="formDiv">
        <div class="card-title">实际参数</div>
        <div class="card-content">
          <el-form :inline="true" label-position="right" label-width="90px" :model="formInline" class="demo-form-inline">
            <el-form-item label="订单编号：">
              <el-input size="small" v-model="formInline.user" placeholder="订单编号"></el-input>
            </el-form-item>
            <el-form-item label="订单名称：">
              <el-input size="small" v-model="formInline.user" placeholder="订单名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox>翻转</el-checkbox>
            </el-form-item>
            <br />
            <el-form-item label="批次编号：">
              <el-input size="small" v-model="formInline.user" placeholder="批次编号"></el-input>
            </el-form-item>
            <el-form-item label="产品名称：">
              <el-input size="small" v-model="formInline.user" placeholder="产品名称"></el-input>
            </el-form-item>
            <el-form-item label="加速器k值：">
              <el-input size="small" v-model="formInline.user" placeholder="加速器k值"></el-input>
            </el-form-item>
            <br />
            <el-form-item label="工艺名称：">
              <el-input size="small" v-model="formInline.user" placeholder="工艺名称"></el-input>
            </el-form-item>
            <el-form-item label="装载方式：">
              <el-input size="small" v-model="formInline.user" placeholder="装载方式"></el-input>
            </el-form-item>
            <el-form-item label="路径名称：">
              <el-input size="small" v-model="formInline.user" placeholder="路径名称"></el-input>
            </el-form-item>
            <el-form-item label="圈数：">
              <el-input size="small" v-model="formInline.user" placeholder="圈数"></el-input>
            </el-form-item>
            <br />
            <el-form-item label="箱子长度：">
              <el-input size="small" v-model="formInline.user" placeholder="箱子长度"></el-input>
            </el-form-item>
            <el-form-item label="箱子高度：">
              <el-input size="small" v-model="formInline.user" placeholder="箱子高度"></el-input>
            </el-form-item>
            <el-form-item label="箱子宽度：">
              <el-input size="small" v-model="formInline.user" placeholder="箱子宽度"></el-input>
            </el-form-item>
            <el-form-item label="箱子重量：">
              <el-input size="small" v-model="formInline.user" placeholder="箱子重量"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="束流：">
              <el-input size="small" v-model="formInline.user" placeholder="束流"></el-input>
            </el-form-item>
            <el-form-item label="功率：">
              <el-input size="small" v-model="formInline.user" placeholder="功率"></el-input>
            </el-form-item>
            <el-form-item label="扫宽：">
              <el-input size="small" v-model="formInline.user" placeholder="扫宽"></el-input>
            </el-form-item>
            <el-form-item label="扫描频率：">
              <el-input size="small" v-model="formInline.user" placeholder="扫描频率"></el-input>
            </el-form-item>
            <el-form-item label="PFN电压：">
              <el-input size="small" v-model="formInline.user" placeholder="PFN电压"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="能量：">
              <el-input size="small" v-model="formInline.user" placeholder="能量"></el-input>
            </el-form-item>
            <el-form-item label="订单箱数：">
              <el-input size="small" v-model="formInline.user" placeholder="订单箱数"></el-input>
            </el-form-item>
            <el-form-item label="剔除箱数：">
              <el-input size="small" v-model="formInline.user" placeholder="剔除箱数"></el-input>
            </el-form-item>
            <el-form-item label="上货箱数：">
              <el-input size="small" v-model="formInline.user" placeholder="上货箱数"></el-input>
            </el-form-item>
            <el-form-item label="合格箱数：">
              <el-input size="small" v-model="formInline.user" placeholder="合格箱数">
                <el-button slot="append">箱</el-button>
              </el-input>
            </el-form-item>
          </el-form>
          <div class="content-bottom">
            <el-button type="primary" size="small" icon="el-icon-success">保存</el-button>
            <el-button size="small" style="margin-left: 15px;" icon="el-icon-error">取消</el-button>
          </div>
          <!-- <div class="caozuoButton">
            <div class="img">
                <img src="./1.png">
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="img">
                <img src="./2.png">
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="img">
                <img src="./3.png">
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="img">
                <img src="./4.png">
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="img">
                <img src="./5.png">
            </div>
          </div> -->
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
                <el-link type="danger" icon="el-icon-error" style="margin-left: 10px;" :disabled="!scope.row.isRunning">停止</el-link>
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
export default {
  name: "OrderList",
  components: {},
  props: {},
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableTitle:[
        {prop:"no",label:"序号",width:"50"},{prop:"taskNo",label:"任务编号",width:"150"},{prop:"revert",label:"翻转",width:"150"},
        {prop:"batchNo",label:"批次编号",width:"150"},{prop:"orderNo",label:"订单编号",width:"150"},{prop:"orderName",label:"订单名称",width:"150"},
        {prop:"planNum",label:"计划数量",width:"150"},{prop:"productName",label:"产品名称",width:"150"},{prop:"loadMethod",label:"装载方式",width:"150"},
        {prop:"pathName",label:"路径名称",width:"150"},{prop:"artName",label:"工艺名称",width:"150"},{prop:"eleDown",label:"电流下限值",width:"150"}
      ],
      tableData: [{
        no: '1',
        taskNo: '220508001',
        revert: '是',
        batchNo: '',
        orderNo: '2023060802001',
        orderName: '静脉穿刺辅助包',
        planNum: '1000',
        productName: '静脉穿刺辅助包',
        loadMethod: '起重机',
        pathName: '',
        artName: '静脉穿刺辅助包',
        eleDown: '10.2',
        isRunning: true
      },
      {
        no: '2',
        taskNo: '220508002',
        revert: '是',
        batchNo: '',
        orderNo: '2023060802001',
        orderName: '静脉穿刺辅助包',
        planNum: '1000',
        productName: '静脉穿刺辅助包',
        loadMethod: '起重机',
        pathName: '',
        artName: '静脉穿刺辅助包',
        eleDown: '10.2',
        isRunning: false
      },
      {
        no: '3',
        taskNo: '220508003',
        revert: '是',
        batchNo: '',
        orderNo: '2023060802001',
        orderName: '静脉穿刺辅助包',
        planNum: '1000',
        productName: '静脉穿刺辅助包',
        loadMethod: '起重机',
        pathName: '',
        artName: '静脉穿刺辅助包',
        eleDown: '10.2',
        isRunning: false
      },
      {
        no: '4',
        taskNo: '220508004',
        revert: '否',
        batchNo: '',
        orderNo: '2023060802001',
        orderName: '静脉穿刺辅助包',
        planNum: '1000',
        productName: '静脉穿刺辅助包',
        loadMethod: '起重机',
        pathName: '',
        artName: '静脉穿刺辅助包',
        eleDown: '10.2',
        isRunning: false
      }]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(){},
    showDynamicGraph() {
      this.$emit('replaceRoute','/homePage/dynamicGraph')
    }
  },
  created() {},
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