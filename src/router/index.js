import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import store from '../store'
import { authGuard, signIn } from '../auth'

// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'

const root = { path: '/', redirect: '/home' }
routes.push(root)

// const routes = setupLayouts(generatedRoutes)
console.log('routes: ', routes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    if(!to.meta.requiresAuth){
        next()
    }else{
        await (await authGuard(to, from, next)).go
    }
})

export default router
