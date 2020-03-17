<!--
 * @Description: 	图片预览
 * @Author: ontheroad1992
 * @Date: 2020-03-07 04:22:20
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-07 04:24:40
 -->
<template>
  <a-modal
    v-model="visible"
    on-ok="handleOk"
  >
    <img
      :src="url"
      alt=""
    >
    <template slot="footer" />
  </a-modal>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      visible: false,
    };
  },
};
</script>
