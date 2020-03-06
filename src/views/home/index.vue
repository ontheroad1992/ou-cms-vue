<!--
 * @Description: 	主业
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:31:56
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 11:46:17
 -->
<template>
  <div class="container">
    <home-cards />
    <home-charts />
  </div>
</template>

<script>
import HomeCards from './HomeCards'
import HomeCharts from './HomeCharts'

export default {
  components: {
    HomeCards,
    HomeCharts
  }
}
</script>

<style lang="less" scoped>

</style>