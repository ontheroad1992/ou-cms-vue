<template>
  <div class="base-sider">
    <div class="logo">
      微点2.0
    </div>
    <a-menu
      theme="dark"
      mode="inline"
      :default-open-keys="defaultOpenKeys"
      :default-selected-keys="defaultSelectedKeys"
      class="menu"
    >
      <!-- 一级菜单 -->
      <template v-for="menu of menus">
        <a-menu-item
          :key="menu.name"
          v-if="!menu.isNav"
          @click="handleRouteToPath(menu.path)"
        >
          <a-icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <!-- 一级子菜单 -->
        <a-sub-menu
          :key="menu.name"
          v-else
        >
          <span slot="title"><a-icon :type="menu.icon" /><span>{{ menu.title }}</span></span>
          <!-- 二级菜单 -->
          <template v-for="sonMenu of menu.routes">
            <a-menu-item
              :key="sonMenu.name"
              v-if="!sonMenu.isNav"
              @click="handleRouteToPath(sonMenu.path)"
            >
              <a-icon type="smile" />
              <span>{{ sonMenu.title }}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { sider } from '@/router'

function findMenuItemsFromPath(path) {
  let stack = []
  const find = routes => {
    for (let item of routes) {
      stack.push(item.name)
      if (item.path === path) {
        return stack
      } else if (item.routes) {
        find(item.routes)
      } else {
        stack.pop()
      }
    }
  }
  find(sider)
  return stack
}

export default {
  props: {
    nextPath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menus: sider,
      defaultSelectedKeys: [],
      defaultOpenKeys: []
    }
  },
  created() {
    // 获得路由的菜单选中结果
    this.defaultSelectedKeys = [this.$route.name]
    this.defaultOpenKeys = findMenuItemsFromPath(this.$route.path)
  },
  methods: {
    handleRouteToPath(path) {
      this.$router.push({ path })
    }
  },
}
</script>

<style scoped lang="less">
.base-sider {
  min-height: 100vh;
  .logo {
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    font-size: 24px;
    color: #ffffff;
  }
  .menu {
    text-align: left;
  }
}
</style>