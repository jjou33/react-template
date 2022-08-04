import { RouteObject } from '@/routers/interface'
import Login from '@/views/login'
const LoginRouter: Array<RouteObject> = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: 'Login',
      key: 'login'
    }
  }
]

export default LoginRouter
