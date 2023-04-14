import { createApp } from 'vue'
// import HighchartsVue from 'highcharts-vue'
import './style.css'
import App from './App.vue'

import SvgIcon from './components/SvgIcon.vue'

const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.mount('#app')
