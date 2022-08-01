import { RouteObject } from '@/routers/interface'
import Signin from '@/views/signin'
const signinRouter: Array<RouteObject> = [
  {
    path: '/signin',
    element: <Signin />,
    meta: {
      title: 'signin',
      key: 'signin'
    }
  }
]

export default signinRouter
