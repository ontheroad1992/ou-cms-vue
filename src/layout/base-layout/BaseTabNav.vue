<!--
 * @Description: 	已经大家过的菜单导航栏
 * @Author: ontheroad1992
 * @Date: 2020-03-06 05:06:07
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 11:07:45
 -->
<template>
  <div class="base-tab-nav">
    <!-- 左侧菜单栏 -->
    <div class="nav-left">
      <div class="nav-item">
        <a-icon
          type="double-left"
          class="icon"
        />
      </div>
      <div
        :class="['nav-item', 'nav-home', active === '/home' ? 'active' : '']"
        @click="handleRoute('/home')"
      >
        <a-icon
          type="home"
          class="icon"
        />
      </div>
    </div>
    <div class="nav-center">
      <template v-for="tab of tabs">
        <div
          :key="tab.nam"
          @click.capture="handleRoute(tab.path)"
          :class="['nav-item', active === tab.path ? 'active' : '']"
        >
          <a-icon
            :type="tab.icon"
            class="icon"
          />
          <span class="title">{{ tab.name }}</span>
          <a-icon
            type="close"
            class="close"
            @click="handleCloseTab(tab.path)"
          />
        </div>
      </template>
    </div>
    <div class="nav-right">
      <div
        class="nav-item"
        style="border-left:1px solid #eeeeee"
      >
        <a-icon
          type="double-right"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
      active: '/home'
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler(route) {
        this.active = route.path
        if (this.active === '/home') return
        let stop = true
        for (let tab of this.tabs) {
          if (tab.path === route.path) stop = false
        }
        if (stop) this.tabs.push({name: route.name, icon: 'xx', path: route.path})
      }
    }
  },
  methods: {
    handleRoute(path) {
      if (this.$route.path === path) return 
      this.$router.push(path)
    },
    handleCloseTab(path) {
      let currentIndex = 0
      this.tabs = this.tabs.filter((item, index) => {
        let bool = item.path !== path
        if (bool) currentIndex = index
        return bool
      })
      if (this.$route.path === path && currentIndex > 0) {
        const path = this.tabs[currentIndex - 1].path
        this.$router.push({ path })
      } else {
        this.$router.push({ path: '/home' })
      }
    }
  }
}
</script>

<style lang="less" secoped>
.base-tab-nav {
  display: flex;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  justify-content: space-between;
  .nav-left, .nav-right, .nav-center {
    display: flex;
  }
  .nav-center {
    flex: 1;
  }
  .nav-item {
    .icon {
      font-size: 20px;
    }
    .title {
      font-size: 14px;
      margin-right: 16px;
    }
    .close {
      font-size: 12px;
      color: #999999;
      padding: 5px;
      border-radius: 50%;
      &:hover {
        background-color: red;
        color: #ffffff;
      }
    }
    padding: 8px 12px;
    border-right: 1px solid #eeeeee;
    cursor: pointer;
  }
  .nav-center .nav-item, .nav-home {
    &:hover {
      .active
    }
  }
}
.active {
  background-color: rgba(48, 111, 236, 0.1);
}
</style>