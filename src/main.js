import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from "@iconify/vue";

const app=createApp(App).component('Icon',Icon).mount('#app')
