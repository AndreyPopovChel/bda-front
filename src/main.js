/**
 * Created by Andrey Popov on 12/9/20.
 */

import {createApp} from 'vue';
import { createHead } from '@vueuse/head'
import App from './app.vue';
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
const head = createHead()
app.use(head)

app.use(PerfectScrollbar)

app.use(router);
app.mount('#app');


