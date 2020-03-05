<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <base-sider :next-path="nextPath" />
    </a-layout-sider>
    <a-layout>
      <base-header v-model="collapsed" />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import BaseSider from './BaseSider'
import BaseHeader from './BaseHeader'

export default {
  components: {BaseSider, BaseHeader},
  data() {
    return {
      collapsed: false,
      nextPath: '/home'
    };
  },
  beforeRouteEnter (to, from, next) {
    const nextPath = to.name
    next(vm => vm.nextPath = nextPath)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
};
</script>
<style scoped lang="less">
  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
</style>
