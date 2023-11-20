import Main from './views/Main/index.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { title: 'Main',requireAuth: true },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: 'Home'  },
        component: () => import('./views/Home/index.vue')
      },
      {
        path: '/activity',
        name: 'Activity',
        meta: { title: 'Activity'  },
        component: () => import('./views/Activity/index.vue')
      },
      {
        path: '/kefu',
        name: 'Kefu',
        meta: { title: 'Kefu'  },
        component: () => import('./views/Kefu/index.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        meta: { title: 'Mine'  },
        component: () => import('./views/Mine/index.vue')
      }
    ],


  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    meta: { title: 'UserInfo'  },
    component: () => import('./views/Mine/UserInfo/index.vue')
  },
  {
    path: '/money',
    name: 'User Money',
    meta: { title: 'User Money Section'  },
    component: () => import('./views/Mine/Money/index.vue')
  },
  {
    path: '/transferRecord',
    name: 'User transferRecord',
    meta: { title: 'User transferRecord Section'  },
    component: () => import('./views/Mine/TransferRecord/index.vue')
  },
  {
    path: '/betRecord',
    name: 'User betRecord',
    meta: { title: 'User betRecord Section'  },
    component: () => import('./views/Mine/BetRecord/index.vue')
  },
  {
    path: '/center',
    name: 'User center',
    meta: { title: 'User center Section'  },
    component: () => import('./views/Mine/UserCenter/index.vue')
  },
  {
    path: '/wallet',
    name: 'UserWallet',
    meta: { title: 'User Wallet Section'  },
    component: () => import('./views/Mine/Wallet/index.vue')
  },
  {
    path: '/chnagepass',
    name: 'ChangePass',
    meta: { title: 'User Password Change Section'  },
    component: () => import('./views/Mine/ChangePassword/index.vue')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    meta: { title: 'User recharge Section'  },
    component: () => import('./views/Mine/Recharge/index.vue')
  },
  {
    path: '/transfer',
    name: 'Transfer',
    meta: { title: 'User Transfer Money Section'  },
    component: () => import('./views/Mine/TransferMoney/index.vue')
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    meta: { title: 'User Withdraw Money Section'  },
    component: () => import('./views/Mine/Withdraw/index.vue')
  },
  {
    path: '/add-usdt',
    name: 'AddUSDT',
    meta: { title: 'User AddUSDT Money Section'  },
    component: () => import('./views/Mine/AddUSDT/index.vue')
  },
  {
    path: '/add-bank',
    name: 'AddBank',
    meta: { title: 'User AddBank Money Section'  },
    component: () => import('./views/Mine/AddBank/index.vue')
  },
  {
    path: '/message',
    name: 'Message',
    meta: { title: 'User Message  Section'  },
    component: () => import('./views/Mine/Message/index.vue')
  },
  {
    path: '/fanshui',
    name: 'Fanshui',
    meta: { title: 'User Fanshui  Section'  },
    component: () => import('./views/Mine/Fanshui/index.vue')
  },
  {
    path: '/fanshui',
    name: 'Fanshui',
    meta: { title: 'User Fanshui  Section'  },
    component: () => import('./views/Mine/Fanshui/index.vue')
  },
  {
    path: '/activityRecord',
    name: 'activityRecord',
    meta: { title: 'User Activity Record  Section'  },
    component: () => import('./views/Mine/ActivityRecord/index.vue')
  },
  {
    path: '/welfare',
    name: 'Welfare',
    meta: { title: 'User Welfare Record  Section'  },
    component: () => import('./views/Mine/Welfare/index.vue')
  },
  {
    path: '/applyAgent',
    name: 'AgentApply',
    meta: { title: 'User AgentApply Record  Section'  },
    component: () => import('./views/Mine/AgentApply/index.vue')
  },
  {
    path: '/app-down',
    name: 'AppDownLoad',
    meta: { title: 'User AppDownLoad   Section'  },
    component: () => import('./views/Mine/AppDown/index.vue')
  },
  {
    path: '/aboutGame',
    name: 'About Game',
    meta: { title: 'User About Game   Section'  },
    component: () => import('./views/Mine/AboutGame/index.vue')
  },
  {
    path: '/paragraph',
    name: 'Paragraph',
    meta: { title: 'Paragraph Section'  },
    component: () => import('./views/Mine/Paragraph/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: 'Login Section'  },
    component: () => import('./views/Auth/Login/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


/* Default title tag */
const defaultDocumentTitle = 'OB'

router.afterEach(to => {
  /* Set document title from route meta */

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})


export default router