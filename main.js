import App from './App.vue'
import 'vant/lib/index.css'
import Vant from 'vant'
import { createPinia } from 'pinia'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(Vant)
	app.use(createPinia())
	return {
		app
	}
}
// #endif
