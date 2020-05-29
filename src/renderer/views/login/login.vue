<template>
  <div class="login">
    <div class="title-bar">
      <div class="text">vue-electron 7</div>
      <div class="close" @click="close">X</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {
    close() {
      const { remote } = require('electron')
      remote.getCurrentWindow().close()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .title-bar {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #8c8c8c;
    display: flex;
    .text {
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 30px;
      -webkit-app-region: drag;
    }
    .close {
      cursor: pointer;
      width: 30px;
      height: 100%;
      border-left: 1px solid #8c8c8c;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
