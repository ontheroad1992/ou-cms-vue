<!--
 * @Description: 	用户布局
 * @Author: ontheroad1992
 * @Date: 2020-03-06 03:08:28
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 17:09:20
 -->
<template>
  <div class="user-layout">
    <div class="header">
      <h1>火星人后台管理</h1>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import _ from 'lodash/lang'

export default {
  computed: {
    accountToken() {
      return this.$store.state.user.accountToken
    }
  },
  mounted() {
    if (!_.isEmpty(this.accountToken)) {
      return this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
.user-layout {
  height: 100vh;
  background: url('~@/assets/images/user-bg.svg') no-repeat 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    h1 {
      font-size: 24px;
    }
    margin-top: 20vh;
    margin-bottom: 20px;
  }
}
</style>