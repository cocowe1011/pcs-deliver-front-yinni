<template>
  <div class="dynamic">
    <el-button type="danger" icon="el-icon-close" style="position: absolute;z-index: 999;right: 35px;top: 70px;" @click="showOrderList">关闭</el-button>
    <div class="dynamic-left">
      <div class="dynamic-left-top">
        <div>
          <div class="card-title">实时数据监控</div>
          <div class="card-content">
            <div class="data-card" style="padding:14px 10px 7px 20px">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子长度</div>
                <div class="data-card-border-borderDown">500mm</div>
              </div>
            </div>
            <div class="data-card" style="padding: 14px 10px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子宽度</div>
                <div class="data-card-border-borderDown">200mm</div>
              </div>
            </div>
            <div class="data-card" style="padding: 14px 20px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子高度</div>
                <div class="data-card-border-borderDown">200mm</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 10px 7px 20px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子重量</div>
                <div class="data-card-border-borderDown">2.3kg</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 10px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">束下设置速度</div>
                <div class="data-card-border-borderDown">1.6米/分钟</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 20px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop granient-text">束下实时速度</div>
                <div class="data-card-border-borderDown">0.0米/分钟</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 10px 14px 20px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop granient-text">运行系数</div>
                <div class="data-card-border-borderDown">k25=0.00</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 10px 14px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">订单圈数</div>
                <div class="data-card-border-borderDown">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dynamic-left-down">
        <div>
          <div class="card-title">操作日志</div>
          <div class="card-content">
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
            <div class="log-text">2023-05-20 13:30:30 与PLC连接成功!</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dynamic-right">
      <div>
        <div class="card-title">实时状态监控</div>
        <div class="card-content chuansongpadding" style="display: flex;justify-content: center;">
          <img src="./img/fushe2x.png" class="fusheIcon"/>
          <transition name="el-fade-in-linear">
            <img src="./img/deng.png" class="fusheguang" v-show="dengShow"/>
          </transition>
          <img src="./img/chuansongdai.png" style="width: 889.67px;height: 682.66px;margin-top:30px" />
          <div class="show-data-area" style="position: absolute;right: 80px;top: 490px;">
            <div class="show-data-area-top">ID信息</div>
            <div class="show-data-area-content">
              <el-input v-model="qrCode" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;right: 80px;top: 528px;">
            <div class="show-data-area-top">上货扫码信息</div>
            <div class="show-data-area-content">
              <el-input v-model="nowInNum" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;right: 80px;top: 569px;">
            <div class="show-data-area-top">当前上货数量</div>
            <div class="show-data-area-content">
              <el-input v-model="nowInNum" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 178px;top: 475px;">
            <div class="show-data-area-top">ID信息</div>
            <div class="show-data-area-content">
              <el-input v-model="qrCode" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 178px;top: 513px;">
            <div class="show-data-area-top">下货扫码信息</div>
            <div class="show-data-area-content">
              <el-input v-model="nowInNum" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 194px;top: 560px;">
            <div class="show-data-area-top">当前下货数量</div>
            <div class="show-data-area-content">
              <el-input v-model="nowInNum" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 436px;top: 185px;width: 150px;height: 58px;">
            <div class="show-data-area-top" style="width: 100%;height: 26px;">束下当前货物ID</div>
            <div class="show-data-area-content" style="width: 100%;height: 26px;">
              <el-input v-model="nowInNum" readonly size="small"></el-input>
            </div>
          </div>
          <!-- 光电星星 -->
          <div class="guangdian" style="top: 447px;right: 86px;">
            <div class='star'></div>
            <div class="pointText">A</div>
          </div>
          <div class="guangdian" style="top: 185px;right: 140px;">
            <div class='star'></div>
            <div class="pointText">B</div>
          </div>
          <div class="guangdian" style="top: 185px;right: 612px;">
            <div class='star'></div>
            <div class="pointText">C</div>
          </div>
          <div class="guangdian" style="top: 331px;right: 654px;">
            <div class='star'></div>
            <div class="pointText">D</div>
          </div>
          <div class="guangdian" style="top: 434px;right: 674px;">
            <div class='star'></div>
            <div class="pointText">E</div>
          </div>
          <div class="guangdian" style="right: 827px;top: 551px;">
            <div class='star'></div>
            <div class="pointText">F</div>
          </div>
          <div class="guangdian" style="right: 792px;top: 600px;">
            <div class='star'></div>
            <div class="pointText">G</div>
          </div>
          <div class="guangdian" style="right: 446px;top: 683px;">
            <div class='star'></div>
            <div class="pointText">H</div>
          </div>
          <!-- 电机状态 -->
          <div class="dianji dianji-active" style="top: 640px;right: 133px;">100#电机</div>
          <div class="dianji dianji-active" style="top: 416px;right: 6px;">101#电机</div>
          <div class="dianji dianji-active" style="top: 386px;right: 190px;">102#电机</div>
          <div class="dianji dianji-active" style="top: 258px;right: 190px;">103#电机</div>
          <div class="dianji dianji-active" style="top: 132px;right: 190px;">104#电机</div>
          <div class="dianji dianji-active" style="top: 88px;right: 450px;">105#电机</div>
          <div class="dianji dianji-active" style="top: 131px;right: 538px;">106#电机</div>
          <div class="dianji" style="top: 259px;right: 516px;">107#电机</div>
          <div class="dianji" style="top: 379px;right: 516px;">108#电机</div>
          <div class="dianji dianji-active" style="top: 379px;right: 641px;">109#电机</div>
          <div class="dianji dianji-active" style="top: 420px;right: 727px;">110#电机</div>
          <div class="dianji dianji-active" style="top: 638px;right: 730px;">111#电机</div>
          <div class="dianji dianji-active" style="top: 639px;right: 627px;">112#电机</div>
          <div class="dianji dianji-active" style="top: 596px;right: 450px;">113#电机</div>
          <div class="dianji" style="top: 596px;right: 264px;">114#电机</div>
          <div class="dianji dianji-active" style="top: 690px;right: 367px;">115#电机</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicGraph",
  components: {},
  props: {},
  data() {
    return {
      dengShow: true,
      qrCode: '202306140001',
      nowInNum: '20'
    };
  },
  watch: {},
  computed: {},
  methods: {
    showOrderList() {
      this.$emit('replaceRoute','/homePage/orderList')
    }
  },
  created() {},
  mounted() {
    setInterval(() => {
      this.dengShow = !this.dengShow;
    }, 1000);
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
      width: 33.3333%;
      height: 33.3333%;
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
  .fusheIcon {
    width:45px;
    height:45px;
    position: absolute;
    right: 372px;
    top: 10px;
  }
  .fusheguang {
    width: 106px;
    height: 100px;
    position: absolute;
    top: 56px;
    right: 342px;
  }
  .chuansongpadding {
    box-sizing: border-box;
    .show-data-area {
      width:250px;
      height: 32px;
      &-top {
        height: 32px;
        width: 100px;
        float: left;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:15px;
        font-weight: 600;
        color: #000000;
      }
      &-content {
        height: 32px;
        width: 150px;
        float: left;
        ::v-deep .el-input--small .el-input__inner {
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #000000;
        }
      }
    }
  }
  &-left{
    width: calc(100% - 930px);
    height: 100%;
    float: left;
    &-top {
      height: 384px;
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
      height: calc(100% - 384px);
      width: 100%;
      float: left;
      box-sizing: border-box;
      padding: 7.5px 15px 15px 15px;
      > div {
        width: 100%;
        height: 100%;
        opacity: 1;
        border-radius: 20px;
        background: rgba(246, 247, 251, 0.56);
        box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(88px);
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
        padding-top: 6px;
        overflow: auto;
        box-sizing: border-box;
      }
      .log-text {
        height: 32px;
        line-height: 32px;
        padding-left: 18px;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  &-right{
    width: 930px;
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
      background: linear-gradient(to right, rgba(83, 188, 206, 0.7), rgba(97, 168, 160, 0.8));
      .guangdian {
        width: 68px;
        height: 50px;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        * {
          border-width: 0;
        }
        .pointText {
          margin-left: 46px;
          font-size: 28px;
          color: #D43030;
        }
        .star{
          width: 0;
          height: 0;
          border-top-color: #AC33C1;
          border-left-color: transparent;
          border-right-color: transparent;
          border-top-width: 20.73px;
          border-left-width: 28.53px;
          border-right-width: 28.53px;
          border-style: solid;
          position: absolute;
          transform: scale(0.5);
        }
        .star::before {
          border-width:0; 
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-top-color: #AC33C1;
          border-left-color: transparent;
          border-right-color: transparent;
          border-top-width: 20.73px;
          border-left-width: 28.53px;
          border-right-width: 28.53px;
          border-style: solid; 
          position:absolute;
          top:-20.73px;
          left:-28.53px;
          transform:rotate(72deg);
          transform-origin:28.53px  9.27px; 
        }
        .star::after{
          border-width:0; 
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-top-color:#AC33C1;
          border-left-color: transparent;
          border-right-color: transparent;
          border-top-width: 20.73px;
          border-left-width: 28.53px;
          border-right-width: 28.53px;
          border-style: solid;   
          position:absolute;
          top:-20.73px;
          left:-28.53px;
          transform:rotate(-72deg);
          transform-origin:28.53px  9.27px; 
        }
      }
      .guangdian:hover {
        background: rgba(246, 247, 251, 0.56);
        box-shadow: 0px 60px 90px 0px rgba(0, 0, 0, 0.2);
      }
      .dianji {
        height: 23px;
        width: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f56c6c;
        color: white;
        position: absolute;
      }
      .dianji-active {
        background-color: #43CF7C;
      }
    }
  }
}
</style>