import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import mitt from "mitt";

const emitter = mitt();


const app = createApp(App)

app.config.globalProperties.emitter = emitter;
app.use(Router).mount('#app')
