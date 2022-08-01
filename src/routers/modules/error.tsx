import { RouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'
import React from 'react'

const signinRouter: Array<RouteObject> = [
  {
    path: '/404',
    element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/404'))),
    meta: {
      title: 'NotFound',
      key: '404'
    }
  }
]

export default signinRouter
