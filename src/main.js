// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueScrollTo from 'vue-scrollto'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false

Vue.use(VueScrollTo)
// Vue.use(VueMaterial)
Vue.use(VueMaterial.MdCore)
Vue.use(VueMaterial.MdIcon)
// Vue.use(VueMaterial.MdList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
