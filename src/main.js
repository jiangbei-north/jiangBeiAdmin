import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入完整的element
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
//createApp(App).use(store).use(router).mount('#app')
