<!--
 * @Description: 	表格的通用布局
 * @Author: ontheroad1992
 * @Date: 2020-03-08 11:15:39
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-10 05:10:14
 -->
<template>
  <div class="container-table">
    <header class="table-header">
      <div class="header-left">
        <a-button>添加</a-button>
      </div>
      <div class="header-right">
        <div class="filter">
          <a-button><a-icon type="filter" /></a-button>
          <ul class="filter-list">
            <li
              v-for="col of cloneColumns"
              :key="col.dataIndex"
            >
              <a-checkbox
                :checked="col.checked"
                @change="e => handleCheckbox(e.target.checked, col.dataIndex)"
              >
                {{ col.title }}
              </a-checkbox>
            </li>
          </ul>
        </div>
        <a-button @click="handelPrint">
          <a-icon type="printer" />
        </a-button>
      </div>
    </header>
    <section ref="table">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    cloneColumns: []
  }),
  computed: {
    columns: {
      get() {
        return this.$attrs.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  mounted() {
    // 复制一份列表选项的数据
    this.cloneColumns = [...this.columns].map(item => {
      item.checked = true
      return item
    })
  },
  methods: {
    // 控制筛选
    handleCheckbox(checked, dataIndex) {
      this.cloneColumns = this.cloneColumns.map(item => {
        if (item.dataIndex === dataIndex) item.checked = checked
        return item
      })
      // 重新赋值 columns 从而重新渲染表单
      this.columns = this.cloneColumns.filter(item => item.checked)
    },
    handelPrint() {
      this.handleCheckbox(false, 'operation')
      // ifram
      const iframe = window.open('', '')
      // iframe.setAttribute('style',             
      //   'position:absolute;width:1200px;min-height:400px;left: 50%;top: 30%; margin-left: -600px; padding: 12px; background-color: #ffffff');
      // document.body.appendChild(iframe);
      // const docFrame = iframe.contentWindow.document;
      const docFrame = iframe.document
      // 标题
      const title = document.createElement('title')
      title.innerHTML = '打印文件'
      docFrame.head.appendChild(title)
      // css 文件
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = 'https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.12/dist/antd.min.css'
      docFrame.head.appendChild(link)
      link.addEventListener('load', () => {
        // 表格数据
        const table = this.$refs.table.getElementsByTagName('table')[0].cloneNode(true)
        docFrame.body.appendChild(table)
        this.handleCheckbox(true, 'operation')
        iframe.print()
        iframe.close()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-table {
  .table-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 8px;
  }
  .header-right {
    display: flex;
    button {
      margin-left: 12px;
    }
    .filter {
      position: relative;
      cursor: pointer;
      .filter-list {
        display: none;
        position: absolute;
        border: 1px solid #ebedf0;
        right: 0;
        background-color: #ffffff;
        // width: 100px;
        z-index: 99;
        padding: 12px 12px 0;
        white-space: nowrap;
        li {
          display: block;
          padding-bottom: 12px;
        }
      }
      &:hover {
        .filter-list {
          display: inherit;
        }
      }
    }
  }
}
</style>