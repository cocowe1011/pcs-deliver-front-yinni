<template>
  <div style="width: 100%;height: 100%;">
    <div class="orderlist">
      <div>
        <div class="formDiv">
          <div class="card-title"><el-divider content-position="left">报表设计</el-divider></div>
          <div class="card-content">
            箱报告模板
            批报告模板
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
export default {
  name: "Report",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    
  },
  created() {
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