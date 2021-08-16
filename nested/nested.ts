import { createApp } from 'vue';
import antd from '@/config/antd.config'; 
import router from '@/router';
import { store, key } from '@/store';
import App from '@/App.vue';
import i18n from '@/config/i18n.config';
import globalVar from "@/config/globalVar"

const app = createApp(App)
app.use(i18n)
app.use(store, key)
app.use(router)
app.use(antd) 
app.use(globalVar)
app.mount('#app')