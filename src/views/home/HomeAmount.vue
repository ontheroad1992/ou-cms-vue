<!--
 * @Description: 首页的卡片
 * @Author: ontheroad1992
 * @Date: 2020-03-06 11:39:31
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 10:50:43
 -->
<template>
  <a-row :gutter="16">
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="充值总金额"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag"
        >日</span>
        <p>{{ rechargeAmounts.day }}</p>
        <div><span>单位：元</span></div>
      </a-card>
    </a-col>
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="充值总金额"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag month"
        >月</span>
        <p>{{ rechargeAmounts.month }}</p>
        <div><span>单位：元</span></div>
      </a-card>
    </a-col>
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="消费总收益"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag"
        >日</span>
        <p>{{ consumeAmounts.day }}</p>
        <div><span>单位：元</span></div>
      </a-card>
    </a-col>
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="消费总收益"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag month"
        >月</span>
        <p>{{ consumeAmounts.month }}</p>
        <div><span>单位：元</span></div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('home', {
      rechargeAmounts: state => state.rechargeAmounts,
      consumeAmounts: state => state.consumeAmounts
    })
  },
  mounted() {
    this.getConsumeAmount()
    this.getRechargeAmount()
  },
  methods: {
    ...mapActions('home', ['getRechargeAmount', 'getConsumeAmount'])
  }
}
</script>

<style lang="less" scoped>
.tag {
  display: inline;
  background-color: rgb(24, 119, 228);
  padding: 2px 5px;
  color: #ffffff;
  font-size: 12px;
}
.month {
  background-color: rgb(211, 9, 211);
}
</style>