// 主要依赖文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueValidator from 'vue-validator';

// 配置文件
import App from './App.vue';
import routerConfig from './router/index';
// import * as filters from './filters';

// Resource
Vue.use(VueResource);

Vue.http.options.root = '/data/';
Vue.http.options.emulateJSON = true;

// Router
Vue.use(VueRouter);

const router = new VueRouter({
    'history': false,
    'initialTransition': 'show',
    'transition': ['left', 'right'],
    'saveScrollPosition': true
});

routerConfig(router);

router.start(App, '#app');

// Validator
Vue.use(VueValidator);
Vue.validator('username', val => !!val.trim().length || /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(val) || /^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|170[0-9]{8}|177[0-9]{8})$/i.test(val));
Vue.validator('email', val => /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(val));
Vue.validator('phone', val => /^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|170[0-9]{8}|177[0-9]{8})$/i.test(val));
Vue.validator('captcha_code', val => /^[\d]{6}$/i.test(val));

// Filters
// Vue.filter('date', filters.dateFilter);
// Vue.filter('category', filters.categoryFilter);
// Vue.filter('department', filters.departmentFilter);
// Vue.filter('city', filters.cityFilter);
