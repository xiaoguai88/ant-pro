export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path:'/memo',
    name:'memo',
    routes:[
      {
        path:'/memo/useMemo',
        name: 'useMemo',
        component: './UseMemo',
      },
      {
        path:'/memo/callback',
        name: 'useCallback',
        component: './UseCallback',
      },
      {
        path:'/memo/useWinSize',
        name: '自定义hooks',
        component: './useWinSize',
      },
    ]
  },
  {
    component: './404',
  },
  
];
