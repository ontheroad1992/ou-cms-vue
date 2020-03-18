<!--
 * @Description: 	主业
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:31:56
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-18 10:31:30
 -->
<template>
  <div class="container">
    <home-device />
    <home-amount />
    <home-charts />
  </div>
</template>

<script>
import HomeDevice from './HomeDevice'
import HomeAmount from './HomeAmount'
import HomeCharts from './HomeCharts'

export default {
  components: {
    HomeDevice,
    HomeAmount,
    HomeCharts
  }
}
</script>

<style lang="less" scoped>

</style>