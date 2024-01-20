// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Gaga 嘎嘎鐘  | 首頁'
    }
  },
  {
    path: '/list',
    component: () => import('@/views/ListView.vue'),
    meta: {
      title: 'Gaga 嘎嘎鐘  | 清單'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
