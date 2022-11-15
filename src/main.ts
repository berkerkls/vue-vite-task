import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import "vuetify/styles"
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives
})

createApp(App)
.use(vuetify)
.use(pinia)
.mount('#app')
