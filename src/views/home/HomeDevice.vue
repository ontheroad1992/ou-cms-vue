<!--
 * @Description: 首页设备参数
 * @Author: ontheroad1992
 * @Date: 2020-03-18 09:50:51
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 13:03:15
 -->
<template>
  <div class="container">
    <a-card
      title="设备纵览信息"
    >
      <span
        slot="extra"
        class="tag"
      >单位：台</span>
      <ul class="all">
        <li>
          <span
            class="tag"
            style="backgroun-color: red"
          >总共：</span>
          <span>{{ devicesInfo.all }}</span>
        </li>
        <li>
          <span class="tag">在线：</span>
          <span>{{ devicesInfo.online }}</span>
        </li>
        <li>
          <span class="tag">离线：</span>
          <span>{{ devicesInfo.offline }}</span>
        </li>
      </ul>
      <div class="progress">
        <a-progress
          :success-percent="onlinePercent"
          :show-info="true"
        />
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  computed: {
    devicesInfo() {
      return this.$store.state.home.devicesInfo
    },
    onlinePercent() {
      const { all, online } = this.devicesInfo
      return Math.ceil(online / all * 100)
    }
  },
  mounted() {
    this.$store.dispatch('home/getDevicesInfo')
  }
}
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 20px;
}
.all {
  display: flex;
  justify-content: space-between;
}
</style>