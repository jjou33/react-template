import { RouteObject } from '@/routers/interface'

import Home from '@/views/home/index'

const homeRouter: Array<RouteObject> = [
  {
    path: '/home',
    element: <Home />,
    meta: {
      title: 'NotFound',
      key: 'home'
    }
  }
]

export default homeRouter
