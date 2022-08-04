import { RouteObject } from '@/routers/interface'
import { Navigate, useRoutes } from 'react-router-dom'

// modules 에 있는 tsx path 에 정의된 route meta 정보를 eager: true 를 주고 Module 형태로 가져온다.
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true })

const routerArray: any = []

// metaRouters 가 가지고 있는 Module 형태의 Object 에서
// route Element 정보를 걸러내어 routerArray 에 넣는다.
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

// 실제 Route 정보를 담는다.
// routerArray 를 구조분해 할당을 통해 배열안에 정의한다.
export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

// useRoutes 를 통해 배열형태의 Object 들을 export 한다.
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
export default Router
