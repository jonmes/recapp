import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import store from './store'
import { DefaultApolloClient } from '@vue/apollo-composable'
import * as apolloClient from './auth'
// import auth0Plugin from './auth/auth0-plugin.vue'
import { createHead } from '@vueuse/head'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient.apolloclient)
    },

    render: () => h(App),
})
const head = createHead()
app.use(router)
app.use(store)
// app.use(auth0Plugin)
app.use(head)
app.mount('#app')
