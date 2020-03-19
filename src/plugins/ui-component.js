/*
 * @Description: ui 组件库的导入
 * @Author: ontheroad1992
 * @Date: 2020-03-05 23:55:34
 * @LastEditors: ontheroad1992
 * @LastEditTime: 2020-03-19 17:01:02
 */

import Vue from "vue";
import {
  Layout,
  Menu,
  Slider,
  Icon,
  Badge,
  Dropdown,
  Card,
  Col,
  Row,
  Progress,
  Form,
  Input,
  Select,
  Button,
  Upload,
  Table,
  Switch,
  Modal,
  Checkbox,
  LocaleProvider
} from "ant-design-vue";

Vue.prototype.$confirm = Modal.confirm;

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(Dropdown);
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);
Vue.use(Progress);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(Button);
Vue.use(Button);
Vue.use(Upload);
Vue.use(Table);
Vue.use(Switch);
Vue.use(Modal);
Vue.use(Checkbox);
Vue.use(LocaleProvider);
