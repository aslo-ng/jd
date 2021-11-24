import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import MetaInfo from 'vue-meta-info'
// import "./assets/reset.css"
Vue.use(MetaInfo)
Vue.use(ElementUI);
Vue.use(Vant);
import "./assets/app"
// 引入样式重置文件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted(){
    document.dispatchEvent(new Event('render-event')); 
  }
}).$mount('#app')
