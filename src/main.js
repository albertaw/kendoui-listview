import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-material/dist/all.css'

import { Pager,
        ListView,
        ListViewInstaller } from '@progress/kendo-listview-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(ListViewInstaller)
Vue.use(DataSourceInstaller)

new Vue({
  el: '#app',
  components: {
    Pager,
    ListView,
    DataSource
  },
  render: h => h(App)
})
