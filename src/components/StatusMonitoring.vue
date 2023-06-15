<template>
  <div class="sm-main" draggable="true">
    PLC连接
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import { EventBus } from '@/utils/EventBus'
export default {
  name: "StatusMonitor",
  components: {},
  props: [],
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // receivedMsg接收到消息发送事件通知
    ipcRenderer.on('receivedMsg', (event, values) => {
      // this.data = this.PrefixZero(values.DBW70.toString(2), 16)
      EventBus.$emit('pushPLCMessage', values)
    })}
};
</script>
<style lang="less" scoped>
.sm-main {
  width: 100px;
  height: 100px;
  background: rgba(14, 153, 39, 1);
  border: 1px solid rgba(14, 153, 39, 1);
  box-shadow: 6px 8px 25px  rgba(0, 0, 0, 0.25);
  position: absolute;
  border-radius: 50px;
  right: 30px;
  top: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 999;
}
</style>