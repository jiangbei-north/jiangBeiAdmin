import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './utils/drapdrop'
//import myMessage from './component/mymessage/mymessage'
import './permission'
//引入完整的element
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//引入公共样式
import '@/styles/index.css'
import 'animate.css'



const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
directives(app)
//app.use(myMessage)
app.mount('#app')
//createApp(App).use(store).use(router).mount('#app')
