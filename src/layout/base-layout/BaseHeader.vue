<!--
 * @Description: 	顶部
 * @Author: ontheroad1992
 * @Date: 2020-03-06 01:38:46
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-06 05:05:23
 -->
<template>
  <a-layout-header class="header">
    <div class="header-left">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="()=> collapsed = !collapsed"
      />
    </div>
    <div class="header-right">
      <div class="bell">
        <a-badge :dot="true">
          <a-icon
            type="bell"
            style="font-size:20px"
          />
        </a-badge>
      </div>
      <div class="user">
        <a-dropdown
          v-model="down"
        >
          <div class="ant-dropdown-link">
            <span>管理员</span>
            <a-icon :type="down ? 'up' : 'down'" />
          </div>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">基本资料</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <div style="drop-item">
                <span>退出</span>
              </div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {
      down: false
    }
  },
  computed: {
    collapsed: {
      get() {
        return this.$attrs.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0;
  .header-right {
    display: flex;
  }
}
.trigger, .bell {
  font-size: 16px;
  line-height: 60px;
  vertical-align: middle;
  padding: 0 24px;
  .cursor
}
.trigger {
  font-size: 20px;
}
.user {
  padding: 0 24px;
  span {
    font-size: 16px;
    margin-right: 12px;
  }
  .drop-item{
    text-align: center;
  }
  .cursor
}
.cursor {
  cursor: pointer;
  &:hover {
    background-color: rgba(190, 187, 187, 0.1);
  }
}
</style>