import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import index from './router/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
// 6.1 - modifiez le code afin que le résultat de `createApp(App)` soit stocké dans une variable `app` + suite à quoi ajoutez la ligne suivante : app.use(router)