import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/font/iconfont.css'
import Button from './components/button'
import Dialog from './components/dialog'
import Input from './components/input'
import Switch from './components/switch'

Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Input.name, Input)
Vue.component(Switch.name, Switch)
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  render: h => h(App)
}).$mount('#app')
