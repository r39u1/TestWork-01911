import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import {routes} from './routes'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')

