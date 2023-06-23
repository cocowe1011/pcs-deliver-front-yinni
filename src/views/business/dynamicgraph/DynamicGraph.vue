<template>
  <div class="dynamic">
    <el-button type="danger" icon="el-icon-close" style="position: absolute;z-index: 999;right: 35px;top: 70px;" @click="closeDynamicGraphShow">关闭</el-button>
    <div class="dynamic-left">
      <div class="dynamic-left-top">
        <div>
          <div class="card-title">实时数据监控</div>
          <div class="card-content">
            <div class="data-card" style="padding:14px 10px 7px 20px">
              <div class="data-card-border">
                <div class="data-card-border-borderTop granient-text">订单号</div>
                <div class="data-card-border-borderDown" style="font-size: 1.3vw;">{{ orderMainDy.orderNo }}</div>
              </div>
            </div>
            <div class="data-card" style="padding: 14px 10px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子长度</div>
                <div class="data-card-border-borderDown">{{ orderMainDy.boxLength }}mm</div>
              </div>
            </div>
            <div class="data-card" style="padding: 14px 20px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子宽度</div>
                <div class="data-card-border-borderDown">{{ orderMainDy.boxWidth }}mm</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 10px 7px 20px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">箱子高度</div>
                <div class="data-card-border-borderDown">{{ orderMainDy.boxHeight }}mm</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 10px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop">束下设置速度</div>
                <div class="data-card-border-borderDown">{{ orderMainDy.sxSpeedSet }}米/分钟</div>
              </div>
            </div>
            <div class="data-card" style="padding: 7px 20px 7px 10px;">
              <div class="data-card-border">
                <div class="data-card-border-borderTop granient-text">束下实时速度</div>
                <div class="data-card-border-borderDown">{{ lightBeamRealTimeSpeed }}米/分钟</div>
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
                <div class="data-card-border-borderDown">{{ orderMainDy.numberTurns }}</div>
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
              <el-input readonly size="small" v-model="nowABoxImitateId"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;right: 80px;top: 528px;">
            <div class="show-data-area-top">上货扫码信息</div>
            <div class="show-data-area-content">
              <el-input v-model="loadScanCode" readonly size="small"></el-input>
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
              <el-input readonly size="small" v-model="nowEBoxImitateId"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 178px;top: 513px;">
            <div class="show-data-area-top">下货扫码信息</div>
            <div class="show-data-area-content">
              <el-input v-model="labyrinthScanCode" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 194px;top: 560px;">
            <div class="show-data-area-top">当前下货数量</div>
            <div class="show-data-area-content">
              <el-input v-model="nowOutNum" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: 436px;top: 185px;width: 150px;height: 58px;">
            <div class="show-data-area-top" style="width: 100%;height: 26px;">束下当前货物ID</div>
            <div class="show-data-area-content" style="width: 100%;height: 26px;">
              <el-input v-model="nowShuXiaid" readonly size="small"></el-input>
            </div>
          </div>
          <div class="show-data-area" style="position: absolute;left: -35px;top: 428px;width: 150px;height: 58px;">
            <div class="show-data-area-top" style="width: 100%;height: 26px;">当前剔除数量</div>
            <div class="show-data-area-content" style="width: 100%;height: 26px;">
              <el-input v-model="nowTiChuNum" readonly size="small"></el-input>
            </div>
          </div>
          <!-- 光电星星 -->
          <div class="guangdian" style="top: 447px;right: 86px;" @click="analogOptoelectronics('A')">
            <div class='star' v-show="pointA == '1'"></div>
            <div class="pointText">A</div>
          </div>
          <div class="guangdian" style="top: 185px;right: 140px;" @click="analogOptoelectronics('B')">
            <div class='star' v-show="pointB == '1'"></div>
            <div class="pointText">B</div>
          </div>
          <div class="guangdian" style="top: 185px;right: 612px;" @click="analogOptoelectronics('C')">
            <div class='star' v-show="pointC == '1'"></div>
            <div class="pointText">C</div>
          </div>
          <div class="guangdian" style="top: 331px;right: 654px;" @click="analogOptoelectronics('D')">
            <div class='star' v-show="pointD == '1'"></div>
            <div class="pointText">D</div>
          </div>
          <div class="guangdian" style="top: 434px;right: 674px;" @click="analogOptoelectronics('E')">
            <div class='star' v-show="pointE == '1'"></div>
            <div class="pointText">E</div>
          </div>
          <div class="guangdian" style="right: 827px;top: 551px;" @click="analogOptoelectronics('F')">
            <div class='star' v-show="pointF == '1'"></div>
            <div class="pointText">F</div>
          </div>
          <div class="guangdian" style="right: 792px;top: 600px;" @click="analogOptoelectronics('G')">
            <div class='star' v-show="pointG == '1'"></div>
            <div class="pointText">G</div>
          </div>
          <div class="guangdian" style="right: 446px;top: 683px;" @click="analogOptoelectronics('H')">
            <div class='star' v-show="pointH == '1'"></div>
            <div class="pointText">H</div>
          </div>
          <!-- 电机状态 -->
          <div :class="['dianji', dianJiStatusArr[7] == '1' ? 'dianji-active' : '']" style="top: 640px;right: 133px;">100#电机</div>
          <div :class="['dianji', dianJiStatusArr[6] == '1' ? 'dianji-active' : '']" style="top: 416px;right: 6px;">101#电机</div>
          <div :class="['dianji', dianJiStatusArr[5] == '1' ? 'dianji-active' : '']" style="top: 386px;right: 190px;">102#电机</div>
          <div :class="['dianji', dianJiStatusArr[4] == '1' ? 'dianji-active' : '']" style="top: 258px;right: 190px;">103#电机</div>
          <div :class="['dianji', dianJiStatusArr[3] == '1' ? 'dianji-active' : '']" style="top: 132px;right: 190px;">104#电机</div>
          <div :class="['dianji', dianJiStatusArr[2] == '1' ? 'dianji-active' : '']" style="top: 88px;right: 450px;">105#电机</div>
          <div :class="['dianji', dianJiStatusArr[1] == '1' ? 'dianji-active' : '']" style="top: 131px;right: 538px;">106#电机</div>
          <div :class="['dianji', dianJiStatusArr[0] == '1' ? 'dianji-active' : '']" style="top: 259px;right: 516px;">107#电机</div>
          <div :class="['dianji', dianJiStatusArr[15] == '1' ? 'dianji-active' : '']" style="top: 379px;right: 516px;">108#电机</div>
          <div :class="['dianji', dianJiStatusArr[14] == '1' ? 'dianji-active' : '']" style="top: 379px;right: 641px;">109#电机</div>
          <div :class="['dianji', dianJiStatusArr[13] == '1' ? 'dianji-active' : '']" style="top: 420px;right: 727px;">110#电机</div>
          <div :class="['dianji', dianJiStatusArr[12] == '1' ? 'dianji-active' : '']" style="top: 638px;right: 730px;">111#电机</div>
          <div :class="['dianji', dianJiStatusArr[11] == '1' ? 'dianji-active' : '']" style="top: 639px;right: 627px;">112#电机</div>
          <div :class="['dianji', dianJiStatusArr[10] == '1' ? 'dianji-active' : '']" style="top: 596px;right: 450px;">113#电机</div>
          <div :class="['dianji', dianJiStatusArr[9] == '1' ? 'dianji-active' : '']" style="top: 596px;right: 264px;">114#电机</div>
          <div :class="['dianji', dianJiStatusArr[8] == '1' ? 'dianji-active' : '']" style="top: 690px;right: 367px;">115#电机</div>
          <!-- 队列信息 -->
          <el-link type="danger" style="position: absolute;top: 326px;right: 109px;" @click="showChuanSong('AB')">{{ '101-103区域货物缓存队列 (' + arrAB.length + ')' }}</el-link>
          <el-link type="danger" style="position: absolute;top: 86px;right: 118px;" @click="showChuanSong('BC')">{{ '104-106区域货物缓存队列 (' + arrBC.length + ')' }}</el-link>
          <el-link type="danger" style="position: absolute;top: 320px;right: 536px;" @click="showChuanSong('CD')">{{ '107-109区域货物缓存队列 (' + arrCD.length + ')' }}</el-link>
          <el-link type="danger" style="position: absolute;top: 445px;left: 240px;" @click="showChuanSong('DG')">{{ '剔除货物缓存队列 (' + arrDG.length + ')' }}</el-link>
          <el-link type="danger" style="position: absolute;top: 689px;right: 542px;" @click="showChuanSong('GH')">{{ '下货区缓存队列 (' + arrGH.length + ')' }}</el-link>
          <!-- 预警 -->
          <img src="./img/yujing.png" class="warning-img" v-show="yujingShow" style="left: 41px;top: 663px;"/>
          <img src="./img/baojing.png" class="warning-img" v-show="baojingShow" style="top: 717px;left: 352px;"/>
          <!-- 操作按钮 -->
          <el-button type="primary" class="caozuoButton" style="top: 108px;left: 20px;" @click="sendMsgToPLC('suspend')">全线暂停</el-button>
          <el-button type="primary" class="caozuoButton" style="top: 158px;left: 20px;" @click="sendMsgToPLC('run')">全线启动</el-button>
          <el-button type="primary" class="caozuoButton" style="top: 208px;left: 20px;" @click="sendMsgToPLC('stop')">全线停止</el-button>
          <el-button type="primary" class="caozuoButton" style="top: 208px;left: 20px;" @click="sendMsgToPLC('clear')">全线清空</el-button>
        </div>
      </div>
    </div>
    <el-drawer
      title="输送带xx"
      :visible.sync="drawer"
      :modal-append-to-body="false"
      border
      size="1120px">
      <div class="drawer-left">
        <div class="content_table">
          <div class="table_head">
            <table>
              <thead>
                <tr>
                  <th style="width:40px;">
                    <div>序号</div>
                  </th>
                  <th style="width: 100px">
                    <div>箱编号</div>
                  </th>
                  <th style="width: 150px">
                    <div>一维/二维码信息</div>
                  </th>
                  <th style="width: 80px">
                    <div>进入时间</div>
                  </th>
                  <th style="width: 80px">
                    <div>测试箱</div>
                  </th>
                  <th style="width: 80px">
                    <div>圈数</div>
                  </th>
                  <th style="width: 80px">
                    <div>翻转</div>
                  </th>
                  <th style="width: 80px">
                    <div>已完成</div>
                  </th>
                  <th style="width: 80px">
                    <div>合格</div>
                  </th>
                  <th style="width: 80px">
                    <div>状态</div>
                  </th>
                  <th>
                    <div>POID</div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="table_list">
            <table>
              <tbody>
                <tr v-for="(item, index) in boxArr" class="body-col" :key="index" draggable="true" @dragstart="dragStart(index)">
                  <td style="width: 40px;">{{ index + 1 }}</td>
                  <td style="width: 100px;">{{ item.boxImitateId }}</td>
                  <th style="width: 150px">{{ item.loadScanCode }}</th>
                  <th style="width: 80px"></th>
                  <th style="width: 80px"></th>
                  <th style="width: 80px">{{ item.numberTurns }}</th>
                  <th style="width: 80px"></th>
                  <th style="width: 80px"></th>
                  <th style="width: 80px">{{ item.qualified === true ? '合格' : item.qualified === false ? '不合格' : '' }}</th>
                  <th style="width: 80px"></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div><!-- <orderList id="orderListComp" ref="orderListComp" :visible="visibleOrderList" :add-data="addData" left="210px" top="95px" @changeSearchWindow="changeSearchWindow" @selectOrderItem="selectOrderItem"></orderList> -->
        </div>
      </div>
      <div class="drawer-right">
        <div :class="['transform-card',traAB?'transform-card-active':'']" @dragover.prevent @drop="dropItem('AB', $event)" @click="showCache('AB')">101-103区域货物缓存队列</div>
        <div :class="['transform-card',traBC?'transform-card-active':'']" @dragover.prevent @drop="dropItem('BC', $event)" @click="showCache('BC')">104-106区域货物缓存队列</div>
        <div :class="['transform-card',traCD?'transform-card-active':'']" @dragover.prevent @drop="dropItem('CD', $event)" @click="showCache('CD')">107-109区域货物缓存队列</div>
        <div :class="['transform-card',traDG?'transform-card-active':'']" @dragover.prevent @drop="dropItem('DG', $event)" @click="showCache('DG')">110-111区域货物缓存队列</div>
        <div :class="['transform-card',traGH?'transform-card-active':'']" @dragover.prevent @drop="dropItem('GH', $event)" @click="showCache('GH')">112-115区域货物缓存队列</div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { EventBus } from '@/utils/EventBus'
import { Debugger, ipcRenderer } from 'electron'
import HttpUtil from '@/utils/HttpUtil'
import moment from 'moment';
export default {
  name: "DynamicGraph",
  components: {},
  props: {},
  data() {
    return {
      dengShow: true,
      // 当前上货数
      nowInNum: 0,
      // 当前下货数
      nowOutNum: 0,
      // 各个区域下箱子数组
      arrAB: [],
      arrBC: [],
      arrCD: [],
      arrDG: [],
      arrGH: [],
      // 每个点位的值，根据收到PLC指令为准，值为1或0
      pointA: '0',
      pointB: '0',
      pointC: '0',
      pointD: '0',
      pointE: '0',
      pointF: '0',
      pointG: '0',
      pointH: '0',
      // 控制拖动传送带抽屉弹窗是否显示和隐藏
      drawer: false,
      // 当前点击的传送带区域内的箱子列表，一个中间变量
      boxArr: [],
      // 当前打开的是哪块传送带队列
      traAB: false,
      traBC: false,
      traCD: false,
      traDG: false,
      traGH: false,
      // 当前被拖动元素的索引
      dragIndex: '',
      // PLC光电状态数组
      guangDianStatusArr: '',
      // PLC点击状态数组
      dianJiStatusArr: '',
      // 当前运行订单对象
      orderMainDy: {},
      // 当前圈数
      nowNumberTurns: 1,
      // 束下实际数据
      lightBeamRealTimeSpeed: 0,
      // 是否正在进入A点
      enteringPonitA: false,
      // 是否正在进入B点
      enteringPonitB: false,
      // 上料固定扫码
      loadScanCode: '',
      // 迷宫出口固定扫码
      labyrinthScanCode: '',
      l11: 2,
      l2: 5,
      lastRouteEPoint: '',
      lastRouteHPoint: '',
      yujingShow: false,
      baojingShow: false,
      nowABoxImitateId: '',
      nowEBoxImitateId: '',
      nowShuXiaid: '', // 当前束下ID 清空
      nowTiChuNum: 0, // 当前剔除的数量，清空
      beginCountNum: 0 // 模拟id开始数，清空
    };
  },
  watch: {
    pointA: {
      handler(newVal, oldVal) {
        if(!this.enteringPonitA && newVal === '1' && oldVal === '0') { //货物开始进入A点
          this.enteringPonitA = true
        } else if(this.enteringPonitA && newVal === '0' && oldVal === '1') { // 货物走出A点
          this.enteringPonitA = false
          this.dealBoxLogic('A')
        } else {
          // 先暂定报警吧，因为肯定不会出现这种情况，出现了视为异常，不做任何处理
          alert('异常！程序走到一个不该走到的地方！')
        }
      }
    },
    pointB: {
      handler(newVal, oldVal) {
        // enteringPonitB
        if(!this.enteringPonitB && newVal === '1' && oldVal === '0') { //货物开始进入B点
          console.log('开始进入B点')
          this.enteringPonitB = true
          // 进入B的下降沿，获取AB队列第一个，开始计算时间，到时间后，进行工艺对比，判断货物是否合格
          const boxImitateId = this.arrAB[0].boxImitateId;
          // 计算时间
          setTimeout(() => {
            this.getUndercutProcess(boxImitateId);
          }, this.calculateMilliseconds((Number(this.l11)/Number(this.lightBeamRealTimeSpeed)).toFixed(2),(Number(this.l2)/Number(this.lightBeamRealTimeSpeed)).toFixed(2)));
        } else if(this.enteringPonitB && newVal === '0' && oldVal === '1') { // 货物走出B点
          console.log('货物走出B点')
          this.enteringPonitB = false
          this.dealBoxLogic('B')
        } else {
          // 先暂定报警吧，因为肯定不会出现这种情况，出现了视为异常，不做任何处理
          alert('异常！程序走到一个不该走到的地方！')
        }
      }
    },
    pointC: {
      handler(newVal, oldVal) {
        this.dealBoxLogic('C')
      }
    },
    pointD: {
      handler(newVal, oldVal) {
        this.dealBoxLogic('D')
      }
    },
    pointE: {
      handler(newVal, oldVal) {
        // 进入E点的，剔除不合格的箱子，给PLC发送剔除指令
        this.dealBoxLogic('E')
      }
    },
    pointF: {
      handler(newVal, oldVal) {
        this.dealBoxLogic('F')
      }
    },
    pointG: {
      handler(newVal, oldVal) {
        this.dealBoxLogic('G')
      }
    },
    pointH: {
      handler(newVal, oldVal) {
        this.dealBoxLogic('H')
      }
    }
  },
  computed: {},
  methods: {
    qualified4Box(boxImitateIdVal, status) {
      console.log(boxImitateIdVal)
      console.log(status)
      console.log(this.arrBC)
      //判断箱子在哪个队列 AB BC CD DG GH,status为true为合格，false为不合格
      for (let index = 0; index < this.arrBC.length; index++) {
        if(this.arrBC[index].boxImitateId == boxImitateIdVal) {
          this.arrBC[index].qualified = status;
          break;
        }
      }
      console.log(this.arrBC)
    },
    // 拿到模拟id去判断箱子的工艺是否合格
    getUndercutProcess(boxImitateIdVal) {
      this.nowShuXiaid = boxImitateIdVal;
      this.$confirm('箱子id' + boxImitateIdVal + '判断工艺，请确定是否合格！', '是否合格', {
        confirmButtonText: '合格',
        cancelButtonText: '不合格',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '箱子id' + boxImitateIdVal + '工艺合格！更新状态！'
        });
        this.qualified4Box(boxImitateIdVal, true)
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '箱子id' + boxImitateIdVal + '工艺不合格！更新状态！'
        });
        this.qualified4Box(boxImitateIdVal, false)
      });
    },
    analogOptoelectronics(point) {
      console.log(point)
      switch (point) {
        case 'A':
          this.pointA = this.pointA === '1' ? '0' : '1'
          break;
        case 'B':
          this.pointB = this.pointB === '1' ? '0' : '1'
          break;
        case 'C':
          this.pointC = this.pointC === '1' ? '0' : '1'
          break;
        case 'D':
          this.pointD = this.pointD === '1' ? '0' : '1'
          break;
        case 'E':
          this.pointE = this.pointE === '1' ? '0' : '1'
          break;
        case 'F':
          this.pointF = this.pointF === '1' ? '0' : '1'
          break;
        case 'G':
          this.pointG  = this.pointG === '1' ? '0' : '1'
          break;
        case 'H':
          this.pointH = this.pointH === '1' ? '0' : '1'
          break;
        default:
          break;
      }
    },
    showOrderInfo(orderMain) {
      this.orderMainDy = JSON.parse(JSON.stringify(orderMain))
    },
    dragStart(index) {
      // 将被拖动的元素的索引存储在数据传输对象中
      this.dragIndex = index
    },
    dropItem(zoneId, event) {
      // 防止浏览器打开拖动的元素的URL
      event.preventDefault();
      // 获取目标区域的ID
      const dropZoneId = zoneId;
      // 执行不同的逻辑，根据目标区域的ID
      // 判断拖拽的是哪个数组的
      switch (dropZoneId) {
        case 'AB':
          this.arrAB.push(this.boxArr[this.dragIndex]);
          break;
        case 'BC':
          this.arrBC.push(this.boxArr[this.dragIndex]);
          break;
        case 'CD':
          this.arrCD.push(this.boxArr[this.dragIndex]);
          break;
        case 'DG':
          this.arrDG.push(this.boxArr[this.dragIndex]);
          break;
        case 'GH':
          this.arrGH.push(this.boxArr[this.dragIndex]);
          break;
        default:
          break;
      }
      this.boxArr.splice(this.dragIndex,1);
      console.log(this.boxArr)
    },
    indexMethod(index) {
      return index + 1;
    },
    showCache(transform) {
      this.boxArr = [];
      this.traAB = false
      this.traBC = false
      this.traCD = false
      this.traDG = false
      this.traGH = false
      switch (transform) {
        case 'AB':
          this.boxArr = this.arrAB;
          this.traAB = true
          break;
        case 'BC':
          this.boxArr = this.arrBC;
          this.traBC = true
          break;
        case 'CD':
          this.boxArr = this.arrCD;
          this.traCD = true
          break;
        case 'DG':
          this.boxArr = this.arrDG;
          this.traDG = true
          break;
        case 'GH':
          this.boxArr = this.arrGH;
          this.traGH = true
          break;
        default:
          break;
      }
    },
    showChuanSong(transform) {
      this.drawer = true
      this.showCache(transform);
    },
    async getCurrentTimeSort() {
      const date = new Date();//当前时间
      const month = this.zeroFill(date.getMonth() + 1);//月
      const day = this.zeroFill(date.getDate());//日
      return date.getFullYear() + '' + month + '' + day + String(this.beginCountNum + 1).padStart(4, '0');
    },
    zeroFill(i){
      if (i >= 0 && i <= 9) {
      return '0' + i;
      } else {
      return i;
      }
    },
    async dealBoxLogic(point) {
      // 这些判断逻辑都不对，得改，因为point*都是在随时变化的，万一变化速度快，从1变0，那么就会丢失这次光电触发状态
      // 正确修改方法：直接在watch方法判断值，一变化接着调用这个方法，并且传固参，不再判断point*变量
      switch (point) {
        case 'A':
          if(this.nowNumberTurns == 1) {
            // 第一圈，仍然是新增，按照要求生成模拟id策略
            const boxImitateId = await this.getCurrentTimeSort();
            this.nowABoxImitateId = boxImitateId;
            // 代表货物进入光电A，生成模拟id绑定,如果有扫码数据则
            this.arrAB.push({orderId: this.orderMainDy.orderId, orderNo: this.orderMainDy.orderNo, boxImitateId: boxImitateId, numberTurns: 1, loadScanCode: this.loadScanCode, turnsInfoList:[{numberTurns: 1, passATime: moment().format('YYYY-MM-DD HH:mm:ss')}]});
            // 上货数量+1
            this.nowInNum++;
            // 模拟id数+1
            this.beginCountNum++;
          } else {
            // 把GH队列最开始箱子加入AB对接，并修改圈数
            this.arrAB.push(this.arrGH[0]);
            this.arrGH.splice(0,1)
            this.arrAB[this.arrAB.length - 1].numberTurns = this.arrAB[this.arrAB.length - 1].numberTurns + 1;
            const nowTurns = this.arrAB[this.arrAB.length - 1].numberTurns;
            this.arrAB[this.arrAB.length - 1].turnsInfoList.push({numberTurns: nowTurns, passATime: moment().format('YYYY-MM-DD HH:mm:ss')});
          }
          console.log(this.arrAB)
          break;
        case 'B':
          // 把AB队列第一个货物出列，进入BC
          this.arrBC.push(this.arrAB[0]);
          // BC刚进队列的箱子，设置 经过B点的时间
          this.arrBC[this.arrBC.length - 1].turnsInfoList[this.arrBC[this.arrBC.length - 1].numberTurns - 1].passBTime = moment().format('YYYY-MM-DD HH:mm:ss');
          // 删除AB队列第一个
          this.arrAB.splice(0,1)
          console.log(this.arrBC)
          break;
        case 'C':
          if(this.pointC === '1') {
            this.arrCD.push(this.arrBC[0]);
            this.arrCD[this.arrCD.length - 1].turnsInfoList[this.arrCD[this.arrCD.length - 1].numberTurns - 1].passCTime = moment().format('YYYY-MM-DD HH:mm:ss');
            // 删除BC队列第一个
            this.arrBC.splice(0,1);
            console.log(this.arrCD)
          }
          break;
        case 'D':
          if(this.pointD === '1') {
            // 把CD队列第一个货物出列，进入DG
            this.arrDG.push(this.arrCD[0]);
            this.arrDG[this.arrDG.length - 1].turnsInfoList[this.arrDG[this.arrDG.length - 1].numberTurns - 1].passDTime = moment().format('YYYY-MM-DD HH:mm:ss');
            // 删除BC队列第一个
            this.arrCD.splice(0,1);
            console.log(this.arrDG)
          }
          break;
        case 'E':
          if(this.pointE === '1') {
            // 判断进入E点的箱子工艺是否合格，合格不做处理，不合格剔除
            if(this.lastRouteEPoint === '') { // 说明物品第一次经过E点，直接取DG数组的第一个元素
              this.judgeIfDGqualified(0);
            } else {
              // 查找DG数组，lastRouteEPoint的元素，那么下一个必定是此时经过E点的元素
              const indexLast = this.arrDG.findIndex(item => {
                return item.boxImitateId === this.lastRouteEPoint
              })
              if(indexLast != -1) {
                // 找到了，lastRouteEPoint的下一个元素必定是经过E点的元素
                // 如果找到的元素是this.arrDG的最后一个元素，则下一个元素就是第一个元素
                if(indexLast === (this.arrDG.length - 1)) {
                  this.judgeIfDGqualified(0);
                } else {
                  this.judgeIfDGqualified(indexLast + 1);
                }
              } else {
                // 找不到，队列第一个肯定就是经过E点的元素
                this.judgeIfDGqualified(0);
              }
            }
          }
          break;
        case 'F':
          break;
        case 'G':
          if(this.pointG === '1') {
            // 判断是否符合下货条件
            if (this.arrDG[0].numberTurns >= this.orderMainDy.numberTurns) {
              // 符合下货条件，展示预警，货物需要下线标识。
              this.yujingShow = true;
            }
            // 把DG队列第一个货物出列，进入GH
            this.arrGH.push(this.arrDG[0]);
            this.arrGH[this.arrGH.length - 1].turnsInfoList[this.arrGH[this.arrGH.length - 1].numberTurns - 1].passGTime = moment().format('YYYY-MM-DD HH:mm:ss');
            // 删除DG队列第一个
            this.arrDG.splice(0,1);
            console.log(this.arrGH)
          }
          break;
        case 'H':
          if(this.pointH === '1') {
            let indexHBox = 0;
            if(this.lastRouteHPoint != '') {
              // 查找arrGH数组，lastRouteHPoint的元素，那么下一个必定是此时经过E点的元素
              const indexLast = this.arrGH.findIndex(item => {
                return item.boxImitateId === this.lastRouteHPoint
              })
              if(indexLast != -1) {
                // 找到了，lastRouteHPoint的下一个元素必定是经过E点的元素
                // 如果找到的元素是this.arrGH的最后一个元素，则下一个元素就是arrGH的第一个元素，即 indexHBox = 0
                if(indexLast != (this.arrGH.length - 1)) {
                  indexHBox = indexLast + 1;
                }
              }
            }
            this.lastRouteHPoint = this.arrGH[indexHBox].boxImitateId;
            // 更新进入H点时间
            this.arrGH[indexHBox].turnsInfoList[this.arrGH[indexHBox].numberTurns - 1].passHTime = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log(this.arrGH)
            // 判断当前箱子的圈数，和全局圈数
            if(this.arrGH[indexHBox].numberTurns >= this.nowNumberTurns) {
              // 更新全局圈数 和 报警信号
              if (this.nowNumberTurns >= this.orderMainDy.numberTurns) {
                this.baojingShow = true;
              } else {
                // 有货物的圈数和全局圈数一致时，则全局圈数加1
                this.nowNumberTurns++;
              }
            }
          }
          break;
        default:
          break;
      }
    },
    judgeIfDGqualified(index) {
      console.log(this.arrDG)
      console.log(index)
      this.nowEBoxImitateId = this.arrDG[index].boxImitateId;
      this.lastRouteEPoint = this.arrDG[index].boxImitateId;
      // 更新进入E点时间
      this.arrDG[index].turnsInfoList[this.arrDG[index].numberTurns - 1].passETime = moment().format('YYYY-MM-DD HH:mm:ss');
      if(this.arrDG[index].qualified === false) {
        // 执行剔除命令
        ipcRenderer.send('writeValuesToPLC', 'DBW18', 1);
        console.log('剔除')
        this.nowTiChuNum++;
        // 在DG数组移除元素
        this.arrDG.splice(index, 1);
      } else {
        // 合格无需处理，写0即可
        ipcRenderer.send('writeValuesToPLC', 'DBW18', 0);
      }
    },
    closeDynamicGraphShow() {
      this.$emit('closeDynamicGraphShow')
    },
    PrefixZero(num, n) {
      return (Array(n).join(0) + num).slice(-n);
    },
    calculateMilliseconds(A, B) {
      return this.minutesToMilliseconds(Number(A) + Number(B));
    },
    minutesToMilliseconds(minutes) {
      return minutes * 60 * 1000;
    },
    sendMsgToPLC(command) {
      switch (command) {
        case 'suspend':
          ipcRenderer.send('writeValuesToPLC', 'DBW6', 1);
          break;
        case 'run':
          ipcRenderer.send('writeValuesToPLC', 'DBW8', 1);
          break;
        case 'stop':
          ipcRenderer.send('writeValuesToPLC', 'DBW10', 1);
          break;
        default:
          break;
      }
    },
    setBeginCountNum(num) {
      this.beginCountNum = num
    },
    async generateBatchReport() {
      const boxMainList = [...this.arrAB, ...this.arrBC, ...this.arrCD, ...this.arrDG, ...this.arrGH];
      await HttpUtil.post('/box/save', boxMainList).then((res)=> {
        if(res.data == 1) {
          this.$emit('returnGenerateBatchReport',true)
        } else {
          this.$emit('returnGenerateBatchReport',false)
        }
      }).catch((err)=> {
        this.$emit('returnGenerateBatchReport',false)
      });
    }
  },
  created() {},
  mounted() {
    setInterval(() => {
      this.dengShow = !this.dengShow;
    }, 1000);
    // 订阅<状态球>eventBus发布的消息
    EventBus.$on('pushPLCMessage', eventData => {
      // --------无PLC测试时，这里以下代码毙掉--------
      this.guangDianStatusArr = this.PrefixZero(eventData.DBW70.toString(2), 16);
      this.pointA = this.guangDianStatusArr[7];
      this.pointB = this.guangDianStatusArr[6];
      this.pointC = this.guangDianStatusArr[5];
      this.pointD = this.guangDianStatusArr[4];
      this.pointE = this.guangDianStatusArr[3];
      this.pointF = this.guangDianStatusArr[2];
      this.pointG = this.guangDianStatusArr[1];
      this.pointH = this.guangDianStatusArr[0];
      // --------无PLC测试时，这里以上代码毙掉--------
      this.dianJiStatusArr = this.PrefixZero(eventData.DBW72.toString(2), 16);
      this.lightBeamRealTimeSpeed = Number(eventData.DBW68);
      // 上料固定扫码
      this.loadScanCode = eventData.DBB100??''.replace(/\s/g,'');
      // 迷宫出口固定扫码
      this.labyrinthScanCode = eventData.DBB130??''.replace(/\s/g,'');
    })
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
  .backgroundimg {
    background-image: url('./img/chuansongdai.png');
    background-size: 889.67px 682.66px;
    background-position: center center;
    background-repeat: no-repeat;
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
        height: 19px;
        font-size: 15px;
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
      .warning-img {
        width: 161.6px;
        height: 89.74px;
        position: absolute;
      }
      .caozuoButton {
        position: absolute;
      }
    }
  }
  .drawer-left {
    width: 900px;
    height: 100%;
    float: left;
    .content_table {
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: relative;
      .table_head,
      .table_list {
        width: 100%;
        table {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          text-align: center;
        }
        td,
        th {
          border: 1px #dedede solid;
          height: 35px;
        }
        thead {
          height: 35px;
          background: #eeeeee;
        }
        td {
          height: 40px;
          font-size: 14px;
        }
        th {
          text-align: center;
        }
        .body-col {
          &:hover {
            background-color: #e6f7ff
          }
          &.selected {
            background-color: #cccdfb;
            &:hover {
              background-color: #b3b5f1;
            }
          }
        }
      }
      .table_head {
        height: 35px;
        overflow: hidden;
        border-bottom: 1px #e4e4e4 solid;
        th {
          cursor: pointer;
        }
      }
      .table_list {
        height: calc(100% - 36px);
        overflow-y: auto;
        tr {
          cursor: pointer;
        }
      }
    }
  }
  .drawer-right {
    width: 200px;
    height: 100%;
    float: left;
    .transform-card {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: antiquewhite;
      border: 1px white solid;
      cursor: pointer;
    }
    .transform-card:hover {
      background-color: aquamarine;
    }
    .transform-card-active {
      background-color: #c2eeff;
    }
  }
  ::v-deep .el-drawer__body{
    flex: none;
    height: calc(100% - 79px);
    overflow: hidden;
  }
}
</style>