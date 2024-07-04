import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xuesheng from '@/views/modules/xuesheng/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import storeup from '@/views/modules/storeup/list'
    import shiyanzhidao from '@/views/modules/shiyanzhidao/list'
    import shiyanjiaoxue from '@/views/modules/shiyanjiaoxue/list'
    import forum from '@/views/modules/forum/list'
    import shiyanxinxi from '@/views/modules/shiyanxinxi/list'
    import shiyanpingfen from '@/views/modules/shiyanpingfen/list'
    import shiyanyuyue from '@/views/modules/shiyanyuyue/list'
    import discusszaixianxuexi from '@/views/modules/discusszaixianxuexi/list'
    import zaixianxuexi from '@/views/modules/zaixianxuexi/list'
    import qicaixinxi from '@/views/modules/qicaixinxi/list'
    import config from '@/views/modules/config/list'
    import shiyanyuan from '@/views/modules/shiyanyuan/list'
    import discussshiyanjiaoxue from '@/views/modules/discussshiyanjiaoxue/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/shiyanzhidao',
        name: '实验指导',
        component: shiyanzhidao
      }
      ,{
	path: '/shiyanjiaoxue',
        name: '实验教学',
        component: shiyanjiaoxue
      }
      ,{
	path: '/forum',
        name: '自由讨论',
        component: forum
      }
      ,{
	path: '/shiyanxinxi',
        name: '实验信息',
        component: shiyanxinxi
      }
      ,{
	path: '/shiyanpingfen',
        name: '实验评分',
        component: shiyanpingfen
      }
      ,{
	path: '/shiyanyuyue',
        name: '实验预约',
        component: shiyanyuyue
      }
      ,{
	path: '/discusszaixianxuexi',
        name: '在线学习评论',
        component: discusszaixianxuexi
      }
      ,{
	path: '/zaixianxuexi',
        name: '在线学习',
        component: zaixianxuexi
      }
      ,{
	path: '/qicaixinxi',
        name: '器材信息',
        component: qicaixinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/shiyanyuan',
        name: '实验员',
        component: shiyanyuan
      }
      ,{
	path: '/discussshiyanjiaoxue',
        name: '实验教学评论',
        component: discussshiyanjiaoxue
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
