import { lazy } from 'react'

export const routes = [
  {
    path: '*',
    component: lazy(() => import('../app/PageNotFound')),
  },
  {
    path: '/',
    component: lazy(() => import('../app/HomePage')),
  },
  {
    path: '/like',
    component: lazy(() => import('../app/MainLike')),
  },
  {
    path: '/texts',
    component: lazy(() => import('../app/Texts')),
  },
  // Add more routes here
]
