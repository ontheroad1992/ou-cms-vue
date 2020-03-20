<!--
 * @Description: 	主业
 * @Author: ontheroad1992
 * @Date: 2020-03-06 02:31:56
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 21:17:50
 -->
<template>
  <div class="container">
    <home-device />
    <home-amount />
  </div>
</template>

<script>
import HomeDevice from './HomeDevice'
import HomeAmount from './HomeAmount'

export default {
  components: {
    HomeDevice,
    HomeAmount
  }
}
</script>

<style lang="less" scoped>

</style>