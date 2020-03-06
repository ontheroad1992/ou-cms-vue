<!--
 * @Description: 首页的卡片
 * @Author: ontheroad1992
 * @Date: 2020-03-06 11:39:31
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 11:40:08
 -->
<template>
  <a-row :gutter="16">
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="访问量"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag"
        >周</span>
        <p>9,9999,666</p>
        <div><span>总计访问量</span></div>
      </a-card>
    </a-col>
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="访问量"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag"
        >周</span>
        <p>9,9999,666</p>
        <div><span>总计访问量</span></div>
      </a-card>
    </a-col>
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="访问量"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag"
        >周</span>
        <p>9,9999,666</p>
        <div><span>总计访问量</span></div>
      </a-card>
    </a-col>
    <a-col
      :sm="{ span: 12 }"
      :lg="{ span: 6 }"
    >
      <a-card
        title="访问量"
        class="cards-item"
      >
        <span
          slot="extra"
          class="tag"
        >周</span>
        <p>9,9999,666</p>
        <div><span>总计访问量</span></div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {

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
</style>