import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { authGuard } from '../auth'

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

router.beforeEach((to, from, next) => {
    next()
})

export default router
