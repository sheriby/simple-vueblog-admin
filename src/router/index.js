import VueRouter from 'vue-router'
import Vue from 'vue'

const Login = () => import('@/views/login/Login')
const DashBoard = () => import('@/views/dashboard/DashBoard')
const Blog = () => import('@/views/dashboard/blog/Blog')
const EditBlog = () => import('@/views/dashboard/edit/EditBlog')
const Type = () => import('@/views/dashboard/type/Type')
const Tag = () => import('@/views/dashboard/tag/Tag')

import { verifyToken } from '@/network/login'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dash', redirect: '/dash/blog' },
  {
    path: '/dash',
    component: DashBoard,
    children: [
      { path: 'blog', component: Blog },
      { path: 'addblog', component: EditBlog },
      { path: 'editblog/:id', component: EditBlog },
      { path: 'type', component: Type },
      { path: 'tag', component: Tag }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: 'admin',
  scrollBehavior() {
    return { X: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/') {
    next()
  } else {
    const token = localStorage.getItem('token')
    verifyToken(token).then(res => {
      if (res.code === 200) {
        next()
      } else {
        next('/login')
      }
    })
  }
})

export default router
