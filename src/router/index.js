import VueRouter from 'vue-router'
import Vue from 'vue'

const Login = () => import('@/views/login/Login')
const DashBoard = () => import('@/views/dashboard/DashBoard')
const Blog = () => import('@/views/dashboard/blog/Blog')
const EditBlog = () => import('@/views/dashboard/edit/EditBlog')

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: Login},
  {path: '/admin', redirect: '/admin/blog'},
  {
    path: '/admin',
    component: DashBoard,
    children: [
      {path: 'blog', component: Blog},
      {path: 'addblog', component: EditBlog},
      {path: 'editblog/:id', component: EditBlog}
    ]
  }
]


export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return {X:0, y:0}
  }
})