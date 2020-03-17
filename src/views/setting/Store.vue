<!--
 * @Description: 	商店设置
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:34:34
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 15:46:15
 -->
<template>
  <div class="container">
    <a-card
      style="width:100%"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key => noTitleKey = key"
    >
      <store-manage
        v-if="noTitleKey === 'store'"
      />
      <company-wechat v-if="noTitleKey === 'wechat'" />
    </a-card>
  </div>
</template>

<script>
import StoreManage from './StoreManage'

export default {
  components: {StoreManage},
  data: () => ({
    tabListNoTitle: [
      {
        key: 'store',
        tab: '门店管理',
      },
      {
        key: 'desktop',
        tab: '桌位管理',
      },
      {
        key: 'printer',
        tab: '打印机管理',
      },
    ],
    noTitleKey: 'store',
  })
}
</script>

<style>

</style>