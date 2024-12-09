import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import App from '@/App'
import "normalize.css"
import "./assets/css/index.less"
import store from './store'
import theme from './assets/theme'

// 配置别名：@ -> src,
// 是在webpack中配置的，但是react脚手架隐藏了webpack
// 解决一：npm run eject(不建议)
// 解决二：craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //   {/* 传递配置的store */}
  <Provider store={store}>
    {/* 配置主题颜色 */}
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
  // <React.StrictMode>
  // <Suspense fallback="loading">

  // </Suspense>
  // </React.StrictMode>
);

