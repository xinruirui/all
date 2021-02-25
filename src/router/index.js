import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
          title:"首页"
        }
      },
      {
        path: '/goods/index',
        name: 'goodsIndex',
        component: ()=>import('../views/goods/goodsIndex.vue') ,
        meta:{
          title:"商品首页"
        }
      },
      {
        path: '/goods/admin/create',
        name: 'goodsAdminCreate',
        component:()=>import('../views/goods/goodsAdminCreate.vue') ,
        meta:{
          title:"新增商品"
        }
      },
      {
        path: '/goods/admin/list',
        name: 'goodsAdminList',
        component:()=>import('../views/goods/goodsAdminList.vue'),
        meta:{
          title:"首商品列表页"
        }
      },

      {
        path: '/goods/setting/category',
        name: 'goodsSettingCategory',
        component:()=>import('../views/goods/goodsSettingCategory.vue'),
        meta:{
          title:"商品分类"
        }
      },
      {
        path: '/goods/opinion/comment',
        name: 'goodsOpinionComment',
        component:()=>import('../views/goods/goodsOpinionComment.vue'),
        meta:{
          title:"商品评价"
        }
      },
      {
        path: '/goods/opinion/consult',
        name: 'goodsOpinionConsult',
        component:()=>import('../views/goods/goodsOpinionConsult.vue'),
        meta:{
          title:"商品咨询"
        }
      },
      // {
      //   path: '/order/index',
      //   name: 'orderIndex',
      //   component: Home,
      //   meta:{
      //     title:"订单首页"
      //   }
      // },
      // {
      //   path: '/order/admin/list',
      //   name: 'orderAdminList',
      //   component: Home,
      //   meta:{
      //     title:"订单列表"
      //   }
      // },
      // {
      //   path: '/order/admin/refund',
      //   name: 'orderAdminRefund',
      //   component: Home,
      //   meta:{
      //     title:"退款日志"
      //   }
      // },
      // {
      //   path: '/order/service/list',
      //   name: 'orderServiceList',
      //   component: Home,
      //   meta:{
      //     title:"售后列表"
      //   }
      // },
      // {
      //   path: '/marketing/index',
      //   name: 'marketingIndex',
      //   component: Home,
      //   meta:{
      //     title:"营销首页"
      //   }
      // },
      // {
      //   path: '/marketing/marketing/discount',
      //   name: 'marketingMarketingDiscount',
      //   component: Home,
      //   meta:{
      //     title:"商品折扣"
      //   }
      // },
      // {
      //   path: '/marketing/marketing/promotion',
      //   name: 'marketingMarketingPromotion',
      //   component: Home,
      //   meta:{
      //     title:"订单促销"
      //   }
      // },
      // {
      //   path: '/marketing/coupon/list',
      //   name: 'mmarketingCouponList',
      //   component: Home,
      //   meta:{
      //     title:"优惠券"
      //   }
      // },
      // {
      //   path: '/marketing/coupon/give',
      //   name: 'marketingCouponGive',
      //   component: Home,
      //   meta:{
      //     title:"优惠券发放"
      //   }
      // },
      // {
      //   path: '/marketing/card/list',
      //   name: 'marketingCardList',
      //   component: Home,
      //   meta:{
      //     title:"购物卡"
      //   }
      // },
      // {
      //   path: '/marketing/card/use',
      //   name: 'marketingCardUse',
      //   component: Home,
      //   meta:{
      //     title:"购物卡使用"
      //   }
      // },
      // {
      //   path: '/member/index',
      //   name: 'memberIndex',
      //   component: Home,
      //   meta:{
      //     title:"会员首页"
      //   }
      // },
      // {
      //   path: '/member/user/client',
      //   name: 'memberUserClient',
      //   component: Home,
      //   meta:{
      //     title:"会员账号"
      //   }
      // },
      // {
      //   path: '/member/user/level',
      //   name: 'memberUserLevel',
      //   component: Home,
      //   meta:{
      //     title:"账号等级"
      //   }
      // },
      // {
      //   path: '/member/withdraw/list',
      //   name: 'memberWithdrawList',
      //   component: Home,
      //   meta:{
      //     title:"提现列表"
      //   }
      // },
      // {
      //   path: '/stats/index',
      //   name: 'statsIndex',
      //   component: Home,
      //   meta:{
      //     title:"数据首页"
      //   }
      // },
      // {
      //   path: '/stats/data/shop',
      //   name: 'statsDataShop',
      //   component: Home,
      //   meta:{
      //     title:"店铺统计"
      //   }
      // },
      // {
      //   path: '/stats/data/goods',
      //   name: 'statsDataGoods',
      //   component: Home,
      //   meta:{
      //     title:"商店统计"
      //   }
      // },
      // {
      //   path: '/stats/data/order',
      //   name: 'statsDataOrder',
      //   component: Home,
      //   meta:{
      //     title:"订单统计"
      //   }
      // },
    ]
  },
 
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})