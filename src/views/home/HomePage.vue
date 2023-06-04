<template>
  <div class="homePage">
    <div class="maskDiv">
      <div class="maskDiv-top">
        <div class="maskDiv-top-left">
          <img src="../../../build/icons/64x64.png" style="width:38px;height:38px;" />
          <div style="margin-left:10px;height:100%;">
            <div class="maskDiv-top-left-top-title">全自动束下输送系统</div>
            <div class="maskDiv-top-left-top-title2">ccs</div>
          </div>
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
        <div class="maskDiv-down-left">
          <div class="maskDiv-down-left-top">
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
          <div class="maskDiv-down-left-down">
            <div>
              <div class="card-title">操作日志</div>
              <div class="card-content"></div>
            </div>
          </div>
        </div>
        <div class="maskDiv-down-right">
          <div>
            <div class="card-title">实时状态监控</div>
            <div class="card-content chuansongpadding" style="display: flex;justify-content: center;">
              <img src="./img/fushe2x.png" class="fusheIcon"/>
              <transition name="el-fade-in-linear">
                <img src="./img/deng.png" class="fusheguang" v-show="dengShow"/>
              </transition>
              <img src="./img/chuansongdai.png" style="width: 889.67px;height: 682.66px;margin-top:30px" />
              <div class="show-data-area" style="position: absolute;right: 150px;top: 475px;" v-show="false">
                <div class="show-data-area-top">上货扫码信息</div>
                <div class="show-data-area-content">
                  <el-input v-model="qrCode" readonly size="small"></el-input>
                </div>
              </div>
              <div class="show-data-area" style="position: absolute;right: 150px;top: 538px;" v-show="false">
                <div class="show-data-area-top">当前上货数量</div>
                <div class="show-data-area-content">
                  <el-input v-model="nowInNum" readonly size="small"></el-input>
                </div>
              </div>
              <div class="show-data-area" style="position: absolute;left: 150px;top: 475px;" v-show="false">
                <div class="show-data-area-top">下货扫码信息</div>
                <div class="show-data-area-content">
                  <el-input v-model="qrCode" readonly size="small"></el-input>
                </div>
              </div>
              <div class="show-data-area" style="position: absolute;left: 150px;top: 538px;" v-show="false">
                <div class="show-data-area-top">当前下货数量</div>
                <div class="show-data-area-content">
                  <el-input v-model="nowInNum" readonly size="small"></el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      showLogout: true,
      dengShow: true,
      qrCode: '202306140001',
      nowInNum: '20'
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
  mounted() {
    setInterval(() => {
      this.dengShow = !this.dengShow;
    }, 1000);
  }
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
        display: flex;
        align-items: center;
        padding-left: 10px;
        &-top-title {
          font-size: 16px;
          font-weight: 550;
          letter-spacing: 0px;
          color: rgba(28, 28, 40, 1);
          text-align: left;
          vertical-align: top;
          height: 30px;
          display: flex;
          align-items: flex-end;
        }
        &-top-title2 {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 1.2px;
          color: rgba(70, 91, 101, 1);
          text-align: left;
          vertical-align: top;
          height: 20px;
          display: flex;
          align-items: flex-start;
        }
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
          width:150px;
          height: 58px;
          &-top {
            height: 25px;
            width: 100%;
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
            width: 100%;
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
        }
      }
    }
  }
}

</style>