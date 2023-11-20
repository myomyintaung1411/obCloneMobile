import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes.js'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(router)
app.use(Vant); // Register all Vant UI components globally
app.mount('#app')
