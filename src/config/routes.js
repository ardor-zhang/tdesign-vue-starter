export default [
  {
    path: '/dashboard',
    icon: 'chart-pie',
    title: '仪表盘',
    component: '../layouts/td-layout.tsx',
    redirect: '/dashboard/base',
    children: [
      {
        title: '基础仪表盘',
        path: 'base',
        component: '../pages/dashboard-base/index.vue',
      },
      {
        title: '详情仪表盘',
        path: 'detail',
        component: '../pages/dashboard-detail/index.vue',
      },
    ],
  },
  {
    path: '/detail',
    icon: 'layers',
    title: '详情页',
    component: '../layouts/td-layout.tsx',
    redirect: '/detail/base',
    children: [
      {
        title: '基础详情页',
        path: 'base',
        component: '../pages/list-base.vue',
        // 默认不填，则需要每个页面都会经过登录的校验，若不需要进行登录校验则将needLogin：设为false
        meta: { needLogin: false, title: '基础详情页' },
      },
      {
        title: '高级详情页',
        path: 'advanced',
        component: '../pages/detail-advanced/index.vue',
      },
      {
        title: '部署配置',
        path: 'deploy',
        component: '../pages/detail-deploy/index.vue',
      },
    ],
  },
  {
    path: '/list',
    icon: 'view-module',
    title: '列表页',
    component: '../layouts/td-layout.tsx',
    redirect: '/list/base',
    children: [
      {
        title: '基础列表页',
        path: 'base',
        component: '../pages/list-base.vue',
      },
      {
        title: '卡片列表页',
        path: 'card',
        component: '../pages/list-card/index.vue',
      },
      {
        title: '基础筛选列表页',
        path: 'select',
        component: '../pages/list-select.vue',
      },
      {
        title: '树状筛选列表页',
        path: 'tree',
        component: '../pages/list-tree.vue',
      },
    ],
  },
  {
    path: '/form',
    icon: 'queue',
    title: '表单页',
    component: '../layouts/td-layout.tsx',
    redirect: '/form/base',
    children: [
      {
        title: '基础表单页',
        path: 'base',
        component: '../pages/form-base/index.vue',
      },
      {
        title: '分步表单页',
        path: 'step',
        component: '../pages/form-step/index.vue',
      },
    ],
  },
  {
    path: '/result',
    icon: 'check-circle',
    title: '结果页',
    component: '../layouts/td-layout.tsx',
    redirect: '/result/403',
    children: [
      {
        title: '403-无权限',
        path: '403',
        component: '../pages/result-403/index.vue',
      },
      {
        title: '404-页面未找到',
        path: '404',
        component: '../pages/result-404/index.vue',
      },
      {
        title: '500-服务器错误',
        path: '500',
        component: '../pages/result-500/index.vue',
      },
      {
        title: '其他-浏览器不兼容',
        path: 'browser-incompatible',
        component: '../pages/result-browser-incompatible/index.vue',
      },
      {
        title: '其他-网络异常',
        path: 'network-error',
        component: '../pages/result-network-error/index.vue',
      },
    ],
  },
  {
    path: '/user',
    icon: 'user-circle',
    title: '个人页',
    component: '../layouts/td-layout.tsx',
    redirect: '/user/index',
    children: [
      {
        title: '个人中心',
        path: 'index',
        component: '../pages/user/index.vue',
      },
    ],
  },
  // 自定义登录页面
  {
    path: '/login',
    title: '登录页',
    component: '../layouts/blank.vue',
    icon: 'chevron-right-rectangle',
    children: [
      {
        title: '登录中心',
        path: 'index',
        meta: { needLogin: false },
        component: '../pages/login/index.vue',
      },
    ],
  },
];
