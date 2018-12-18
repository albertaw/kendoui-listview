import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-material/dist/all.css'

import { Pager,
        ListView,
        ListViewInstaller } from '@progress/kendo-listview-vue-wrapper'

Vue.use(ListViewInstaller)

new Vue({
  el: '#app',
  components: {
    Pager,
    ListView
  },
  render: h => h(App)
})
