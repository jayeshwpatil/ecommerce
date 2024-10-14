// import './assets/main.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Global variable for product list
// import productList from '../src/productList.json'
// window.productList = productList
// console.log('global product list : ', window.productList)

const app = createApp(App)

app.use(router)

app.mount('#app')
