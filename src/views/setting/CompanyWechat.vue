<template>
  <a-form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <a-form-item label="接入方式">
      <span class="ant-form-text">普通接入</span>
    </a-form-item>
    <a-form-item
      label="通信URL"
    >
      <p>http://www.lanka.vip/api.php?id=2</p>
    </a-form-item>
    <a-form-item
      label="头像"
    >
      <div class="form-upload">
        <img
          :src="imageUrl"
          class="avatar"
        >
        <a-upload
          name="logo"
          @change="uploadEevnt"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        >
          <a-button class="upload-btn">
            <a-icon type="upload" />选择图片
          </a-button>
        </a-upload>
      </div>
    </a-form-item>
    <a-form-item
      label="二维码"
    >
      <div class="form-upload">
        <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          class="avatar"
        >
        <a-upload
          name="logo"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        >
          <a-button class="upload-btn">
            <a-icon type="upload" />选择图片
          </a-button>
        </a-upload>
      </div>
    </a-form-item>
    <a-form-item label="账户">
      <a-input v-model="account" />
    </a-form-item>
    <a-form-item label="原始ID">
      <a-input v-model="id" />
    </a-form-item>
    <a-form-item label="AppId">
      <a-input v-model="appId" />
    </a-form-item>
    <a-form-item label="AppSecret">
      <a-input v-model="appSecret" />
    </a-form-item>
    <a-form-item label="类型">
      <a-select
        default-value="red"
        placeholder="Please select favourite colors"
      >
        <a-select-option value="red">
          普通订阅号
        </a-select-option>
        <a-select-option value="green">
          Green
        </a-select-option>
        <a-select-option value="blue">
          Blue
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Token令牌">
      <a-input v-model="token" />
    </a-form-item>
    <a-form-item label="EncodingAESKey">
      <a-input v-model="ecKey" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <a-button
        type="primary"
        html-type="submit"
      >
        确认保存
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
    account: 'lancafe',
    id: 'gh_c8ba398cc708',
    appId: 'wqeweqwdxc',
    appSecret: 'asdasdqwfdf',
    token: '123123rdsfg24trwesfdcas',
    ecKey: 'EncodingAESKey',
    imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
    uploadEevnt(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    }
  },
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
.form-upload {
  display: flex;
  flex-direction: row;
}
.avatar {
  margin-right: 12px;
  width: 80px;
  height: 80px;
}
.upload-btn {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>