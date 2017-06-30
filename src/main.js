import Vue from 'vue'
import App from './App.vue'

import vscroll from './vscroll/vscroll'
Vue.directive("scroll", vscroll)

new Vue({
    el: '#app',
    render: h => h(App)
})