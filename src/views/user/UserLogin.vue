<!--
 * @Description: 	登陆
 * @Author: ontheroad1992
 * @Date: 2020-03-06 03:07:19
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 17:04:57
 -->
<template>
  <div class="container">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        has-feedback
      >
        <a-input
          size="large"
          v-decorator="['username', {
            rules: [
              { required: true, message: '用户名不能为空！' },
              { pattern: /(\d|\w){6,20}/, message: '用户名格式错误！6-20 位的任意字符' }
            ],
            initialValue: initUsername
          }]"
          placeholder="用户名"
        >
          <a-icon
            slot="prefix"
            type="user"
          />
        </a-input>
      </a-form-item>
      <a-form-item
        has-feedback
      >
        <a-input
          size="large"
          type="password"
          v-decorator="['password', {
            rules: [
              { required: true, message: '密码不能为空！' },
              { pattern: /(\d|\w){6,20}/, message: '密码格式错误！6-20 位的任意字符' }
            ]
          }]"
          placeholder="登陆密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          size="large"
          html-type="submit"
          style="width:100%"
        >
          登陆
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  computed: {
    initUsername() {
      return this.$store.state.user.username || ''
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          await this.$store.dispatch('user/userLogin', values)
          this.$router.push({ path: '/' })
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 300px;
}
</style>