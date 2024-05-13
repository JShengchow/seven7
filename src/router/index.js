import { createRouter, createWebHistory } from 'vue-router'
import page from './page'

import welcome from '../views/welcome/index.vue'
import home from '../views/home/index.vue'
import dateRecord from '../views/dateRecord/index.vue'
import setting from '../views/setting/index.vue'
import textRecord from '../views/textRecord/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      name: page.WELCOME,
      path: '/welcome',
      component: welcome
    },
    {
      path: '/home',
      component: home,
      name: page.HOME,
      children: [
        {
          path: '',
          redirect: { name: 'dateRecord' }
        },
        {
          name: page.DATE_RECORD,
          path: 'dateRecord',
          component: dateRecord
        },
        {
          name: page.TEXT_RECORD,
          path: 'textRecord',
          component: textRecord
        },
        {
          name: page.SETTING,
          path: 'setting',
          component: setting
        }
      ]
    }
  ]
})

export default router
