<template>
  <container-table
    v-model="columns"
  >
    <a-table
      :columns="columns"
      :data-source="data"
      :row-key="record => record.name"
      size="small"
      ref="table"
      bordered
    >
      <!-- logo -->
      <template
        v-for="col of columns"
        :slot="col.dataIndex"
        slot-scope="text"
      >
        <div :key="col.dataIndex">
          <a
            href="javascript:;"
            @click="showImg(text)"
          >
            <img
              v-if="col.component === 'img'"
              :src="text"
              width="40px"
            >
          </a>
          <span v-if="col.component === 'span'">{{ text }}</span>
          <a-switch
            v-if="col.component === 'switch'"
            checked-children="开"
            un-checked-children="关"
            :default-checked="text"
          />
          <div
            class="editable-row-operations"
            v-if="col.component === 'operation'"
          >
            <a-button
              type="primary"
            >
              编辑
            </a-button>
            <a-button type="danger">
              删除
            </a-button>
          </div>
        </div>
      </template>
    </a-table>
  </container-table>
</template>
<script>
import { Modal } from 'ant-design-vue'
import ContainerTable from '@/container/ContainerTable'

const columns = [
  {
    title: 'logo',
    dataIndex: 'logo',
    width: 40,
    component: 'img',
    scopedSlots: { customRender: 'logo' },
  },
  {
    title: '名称',
    dataIndex: 'name',
    component: 'span',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '电话',
    dataIndex: 'mobile',
    width: '10%',
    component: 'span',
    scopedSlots: { customRender: 'mobile' },
  },
  {
    title: '积分',
    dataIndex: 'integral',
    align: 'center',
    width: 80,
    component: 'switch',
    scopedSlots: { customRender: 'integral' },
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    align: 'center',
    component: 'switch',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 150,
    align: 'center',
    component: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  components: {
    ContainerTable
  },
  data() {
    return {
      columns,
      data: [{
        logo: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        name: '蓝卡科技',
        mobile: '18007328811',
        integral: true,
        status: true
      }]
    };
  },
  methods: {
    showImg(url) {
      Modal.info({
        maskClosable: true,
        icon: () => <span></span>,
        content: () => <img src={url} style={{width: '100%'}} />
      })
      // this.$info({
      //   title: img
      // })
    }
  },
};
</script>
<style scoped>
.editable-row-operations {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
