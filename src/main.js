import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {
  Field as VField, Form as VForm, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import App from './App.vue';
import { hexAxios, frontAPI } from './response/hexAxios';
import bus from './methods/bus';
import router from './router';
import { date, currency, dateToTimestamp } from './methods/filters';

import 'bootstrap';
import 'material-icons/iconfont/material-icons.css';

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
setLocale('zh_TW');

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

const app = createApp(App);

app.config.globalProperties.$filters = {
  date,
  currency,
  dateToTimestamp,
};

app.config.globalProperties.$hexAxios = hexAxios;
app.config.globalProperties.$frontAPI = frontAPI;
app.config.globalProperties.$bus = bus;
app.use(router);
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.component('VForm', VForm);
app.component('VField', VField);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
