<!--
 * @Description: 	公司设置
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:33:10
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 13:27:50
 -->
<template>
  <div class="container">
    <a-card
      style="width:100%"
      :tab-list="tabListNoTitle"
      :active-tab-key="noTitleKey"
      @tabChange="key => noTitleKey = key"
    >
      <company-manage
        v-if="noTitleKey === 'company'"
      />
      <company-wechat v-if="noTitleKey === 'wechat'" />
    </a-card>
  </div>
</template>

<script>
import CompanyManage from './CompanyManage'
import CompanyWechat from './CompanyWechat'

export default {
  components: {
    CompanyManage,
    CompanyWechat
  },
  data() {
    return {
      tabListNoTitle: [
        {
          key: 'company',
          tab: '公司设置',
        },
        {
          key: 'wechat',
          tab: '微信公众号设置',
        },
      ],
      noTitleKey: 'company',
    }
  },
  methods: {

  }
}
</script>

<style>

</style>