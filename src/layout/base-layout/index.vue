<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <base-sider />
    </a-layout-sider>
    <a-layout>
      <base-header v-model="collapsed" />
      <base-tab-nav />
      <a-layout-content
        :style="{ margin: '24px 16px', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import _ from 'lodash/lang'
import BaseSider from './BaseSider'
import BaseHeader from './BaseHeader'
import BaseTabNav from './BaseTabNav'

export default {
  components: {BaseSider, BaseHeader, BaseTabNav},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    accountToken() {
      return this.$store.state.user.accountToken
    }
  },
  mounted() {
    if (_.isEmpty(this.accountToken)) {
      return this.$router.push({ path: '/user' })
    }
  }
};
</script>
<style scoped lang="less">
</style>
