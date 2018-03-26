import Vue from 'vue'
import Router from 'vue-router'
import insurance from '../components/insurance/insurance.vue'
import user from '../components/user/user.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import index from '../components/index/index.vue'
import detailView from '../components/detailView/detailView.vue'
import content from '../components/content/content.vue'
import userInfo from '../components/userInfo/userInfo.vue'
import comfirmOrder from '../components/confirmOrder/comfirmOrder.vue'
import idInfromation from '../components/idInformation/idInfromation.vue'
import payment from '../components/payment/payment.vue'
import insuranceDeal from '../components/insuranceDeal/insuranceDeal.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: content,
      children: [
        {
          path: '/',
          name: 'index',
          component: index
        },
        {
          path: '/insurance',
          name: 'insurance',
          component: insurance
        },
        {
          path: '/user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/detailView',
      name: 'detailView',
      component: detailView,
      props: true
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userInfo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: comfirmOrder
    },
    {
      path: '/fillidinformation',
      name: 'fillidinformation',
      component: idInfromation
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/insuranceDeal',
      name: 'insuranceDeal',
      component: insuranceDeal
    }
  ]
})
