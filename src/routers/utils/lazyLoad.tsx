import { css } from '@emotion/react'
import { Spin } from 'antd'
import React, { Suspense } from 'react'

const spinStyle = css`
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
`
const lazyLoad = (Component: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense fallback={<Spin css={spinStyle} size="large" />}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
