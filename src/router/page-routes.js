import Layout from '@/layout'
const PAGE_ROUTES = [
  {
    path: '/',
    name: 'dashboard',
    redirect: '/dashboardIndex',
    hidden: false,
    meta: {
      icon: 'el-icon-s-promotion',
      title: 'Dashboard'
    },
    component: Layout,
    children: [
      {
        path: 'dashboardIndex',
        name: 'DashboardIndex',
        hidden: false,
        meta: {
          icon: 'el-icon-document',
          title: 'DashboardIndex'
        },
        component: () => import('@/views/Dashboard/DashboardIndex.vue'),
        children: []
      }
    ]
  }
]
export default PAGE_ROUTES
