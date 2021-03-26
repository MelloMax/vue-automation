import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'vue-auto-routing'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/Home'
    }
  ]
})

export default router
