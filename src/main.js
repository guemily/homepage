/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.config.productionTip = false
Vue.use(VueFullPage);
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app')