<template>
  <div class="config">
    欢迎登录配置管理页面
  </div>
</template>
<script>
import { ipcRenderer } from 'electron'
import HttpUtil from '@/utils/HttpUtil'
export default {
  name: "SystemConfig",
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
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.config {
  width: 100%;
  height: 100%;
}
</style>