import React, { Suspense, memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  const location = useLocation()
  useEffect(() => {
    // 页面发生改变滚动到头部
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className='app'>
      <AppHeader></AppHeader>
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>

      <AppFooter></AppFooter>
    </div>
  )
})

export default App