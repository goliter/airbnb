# 一.项目的搭建
## 1.React中配置别名：@ -> src

### craco => create-react-app config
### 1.1.安装craco: npm install @craco/craco@alpha -D
### 2.1.建立  craco.config.js文件
### 3.1 修改 package.json 里的 scripts 属性,把react-scripts修改为craco

<!-- "scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
} -->
## 2.Less

### 安装craco-less: npm i craco-less@2.1.0-alpha.0

## 3.重置CSS样式

### 安装normalize ： npm install normalize.css
### 引入：import "normalize.css"

## 4.Router配置

### 安装：npm install react-router-dom 
### 导入：import {HashRouter} from "react-router-dom"
### HashRouter：hash模式 BrowserRouter：history模式
### 包裹App：
<!-- root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
); -->
### 建立router文件夹：新建index.js，定义一个routes并导出
### 在App文件里面对要使用路由的地方使用：{useRoutes(routes)}：

  <!-- <div className='app'>
      <div className='header'>header</div>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
  </div> -->
### 报错：The above error occurred in the <Route.Provider> component:
### React中导入Suspense,在对其进行包裹：
<!-- <React.StrictMode>
    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode> -->

## 5.Redux状态管理

### 安装：npm install @reduxjs/toolkit react-redux
### 新建store文件夹  index.js  并且导入：import {configureStore} from "@reduxjs/toolkit" 

<!-- import {configureStore} from "@reduxjs/toolkit"
      import homeReducer from "./modules/home"
const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

export default store -->
### 再在最外层index.js文件中导入：import {Provide} from "react-dux",用Provider包裹
### 传递创建的store

<!-- <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense> -->
### 创建模块：在home.js文件中：
<!-- import {createSlice} from "@reduxjs/toolkit"


const homeSlice = createSlice({
  name: "home",
  initialState: {

  },
  reducers: {

  }
})

export default homeSlice.reducer -->

## 6.网络请求 - axios

### 安装：npm install axios 

## 7.样式开发

### 7.1安装：npm install styled-components
### 安装好之后，jsx文件就会有一个对应的 style.js文件用于开发样式(CSS in JS技术)
### 7.2使用：
import styled from "styled-components"

export const HeaderWrapper = styled.div`
  .left {

  }
  .center {

  }
  .right {
    
  }
`
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="left"></div>
      <div className="center"></div>
      <div className="right"></div>
    </HeaderWrapper>
  )
})

export default AppHeader

# 二.项目开发

## 1.header开发：封装AppHeader组件,AppHeader又分 左中右 三部分

### 1.1 svg的使用：
#### 到爱彼迎网站复制对应logo的svg，然后再assets文件中建立单独文件，把复制下来的svg当成单独的组件，在需要的地方直接使用

### 1.2 主题文件配置：
import { ThemeProvider } from "styled-components"
import theme from './assets/theme'

<Provider store={store}>
      {/* 配置主题颜色 */}
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>

### 1.3 动画效果和样式混入
### 1.4 中间搜索框布局和展示
### 1.5 Profile 点击面板切换效果

## 2.首页内容开发

### 2.1 顶部轮播图图片展示: HomeBanner
#### 2.1.1 在 img 标签中引入图片，如果按照以前的方式引入图片是不能展示的,当做背景图片也需要引入，在使用 ：background: url(${coverImg}); 或  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;

import coverImg from "@/assets/img/cover_01.jpeg"

const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      <img src={coverImg} alt="" />
    </BannerWrapper>
  )
})

### 2.2 高性价比数据Redux获取和管理
#### 2.2.1 在store对应的文件中发送网络请求：
import { getHomeGoodPriceData } from "@/services"
<!-- 方法一： -->
export const fetchHomeDataAction = createAsyncThunk("fetchdata",async () => {
  // 发送网络请求
 const res = await getHomeGoodPriceData()

 return res
})
<!-- 方法二： -->
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {
  // 发送网络请求
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScorenfoAction(res))
  })
})
<!-- #### 2.2.2 获取请求到的数据并存储：
 extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, {payload}) => {
      state.goodPriceInfo = payload
    })
  }, -->
#### 2.2.3在对应的组件中使用数据并发送网络请求：
 const {goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }),shallowEqual)

 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

### 2.3 首页区域开发: 

#### 2.3.1 header封装：components -> SectionHeader
#### 2.3.2 房间item封装：components -> RoomItem

### 2.4 antd库使用
#### 2.4.1 安装：npm install antd --save

### 2.5 高分好评列表开发
#### 2.5.1 高分好评数据获取和展示

### 2.6 折扣数据获取展示
#### 2.6.1 动态设置ItemRoom的宽度

<ItemWrapper 
    verifycolor={itemData?.verify_info?.text_color ||"#39576a" }
    itemwidth={itemWidth}
    />

   width: ${props => props.itemwidth};

### 2.7 动态添加class 
#### 2.7.1 安装： npm install classnames
#### 2.7.2 使用：
import classNames from 'classnames'
 <div className={classNames("item", {active: index === currentIndex})}> </div>

### 2.8 切换tabs 数据动态切换
#### 2.8.1 第一次渲染数据：设置初始化值
法一：const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ""，但是这种 方法不可取(第二次渲染了)，因为useState初始值，只有在组件第一次被渲染时，才是生效的

法二：控制infoData在有值的情况下在渲染，第一次不被渲染,再次基础上在使用法一

 {Object.keys(discountInfo).length &&  <HomeSectionV1 infoData={discountInfo} />}
法三：使用useEffect，但是会造成组件渲染三次
useEffect(() => {
 setName("xxx")
},[infoData.dest_list])

### 2.9 热门推荐数据请求和展示
### 2.10 首页区域Footer的封装和展示

### 2.11 首页滚动区域的实现
#### 2.11.1 封装组件ScorllView:左边按钮、右边按钮、显示内容由外界传递
* props.children
* 计算scrollView要不要滚动
  * 获取scrollWIdth
  * 获取clientWidth
  * const totalDistance = scrollWidth - clientWidth
  * totalDistance > 0, 显示右边的按钮
#### 2.11.2 插槽的使用：
<div className="scroll-content">
  {props.children}
</div>

#### 2.11.3 计算可滚动区域：判断右边按钮是否显示
const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
const clientWidth = scrollContentRef.current.clientWidth //占据的宽度
const totalDistance = scrollWidth - clientWidth //可以滚动的区域

#### 2.11.4 点击右边按钮往左移动，并计算向左移动的距离：offsetLeft
* 记录索引: posIndex
* newIndex = posIndex + 1
* 根据newIndex索引获取到子元素 children[newIndex]
* newEl.offsetLeft
  * 注意事项: 设置定位
* 修改scrollContentRef.current.style.transform = translate(xx)
* 设置最新的索引
* 判断右边按钮是否显示
* 判断左边按钮是否显示

#### 2.11.5 判断左侧按钮是否显示

### 2.12 想去数据的请求和展示

### 2.13 plus数据的请求和展示

### 2.14 全部页面的跳转
#### 2.14.1 路由跳转
const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }


## 3.Footer开发：封装AppFooter组件

## 4.全部页面开发
### 4.1 全部页面的过滤展示和选中
*选中和取消选中

### 4.2 房间列表数据的获取和展示
#### 4.2.1 在redux中保存 currentPage,roomList,totalCount数据
#### 4.2.2 如何根据currentPage获取数据？

### 4.3 分页器展示和交互
分页数据个数和展示的小算法：
  const totalPage = Math.ceil(totalCount / 20) //向上取整
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

#### 4.3.1 页码改变-请求和展示新的数据
#### 4.3.2 请求完数据回到顶部 window.scrollTo(0,0)
#### 4.3.3 请求数据的蒙版是否展示

### 4.4 RoomItem轮播图效果实现
#### 4.4.1 antd Carousel 组件使用并实现左右切换
#### 4.4.2 指示器组件封装
*selectedIndex居中显示

### 4.5 RoomItem 点击跳转详情页 详情页面开发
*item页面 =>entire中监听页面=>跳转到详情
#### 4.5.1 详情的图片展示和遮盖层效果
*item的数据保存到redux中
*detail中获取数据
*detail-picturs展示图片

### 4.6 图片浏览器组件封装：PictureBrowser

#### 4.6.1 滚动条的消失与隐藏
useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  },[])
#### 4.6.2 PictureBrowser的显示与隐藏
{showBrowser && <PictureBrowser pictureUrls={deatilInfo.picture_urls} closeClick={e => setShowBrowser(false)}/>}
#### 4.6.3 图片浏览器中间图片的展示
* 上面部分和下面部分固定高度，中间图片展示区域大小随屏幕变化
* 使用flex布局，column 中间flex1
* 左右箭头展示
* 记录点击图片的索引
const [currentIndex, setCurrentIndex] = useState(0)
* 点击箭头切换上一个 下一个
function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1: currentIndex - 1
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }
#### 4.6.4 图片切换过渡动画: npm install react-transition-group
* 引入：import { CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group"

* 使用：SwitchTransition不能直接包裹元素，需要使用CSSTransition
 <div className="picture">
    <SwitchTransition mode='in-out'>
      <CSSTransition key={pictureUrls[currentIndex]} classNames="pic" timeout={200}>
        <img src={pictureUrls[currentIndex]} alt="" />
      </CSSTransition>
    </SwitchTransition>
  </div>

#### 4.6.5 图片浏览器底部图片展示

## 5. 头部不同页面的fixed效果切换
*不同页面头部展示效果不一样




