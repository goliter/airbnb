import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { isEmptyO } from '@/utils/is-empty-object'
import SectionFooter from '@/components/section-footer'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { changeHeaderConfigAction } from '@/store/modules/main'
// import AppHeader from '@/components/app-header'

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)


  // 派发异步事件，发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    // 修改头部状态
    dispatch(changeHeaderConfigAction({isFixed: true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      {/* <AppHeader/> */}
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        {Object.keys(discountInfo).length && <HomeSectionV1 infoData={discountInfo} />}
        {/* 热门推荐 */}
        {Object.keys(recommendInfo).length && <HomeSectionV1 infoData={recommendInfo} />}

        {/* 想去的地方 */}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {/* 高性价比 */}
        <div className="good-price">
          {
            isEmptyO(goodPriceInfo) && <SectionHeader title={goodPriceInfo.title} />
          }
          {
            isEmptyO(goodPriceInfo) && <SectionRooms roomList={goodPriceInfo.list} />
          }
          <SectionFooter />
        </div>
        {/* 高评分 */}
        <div className="high-score">
          <SectionHeader title={highScoreInfo.title} subTitle={highScoreInfo.subtitle} />
          <SectionRooms roomList={highScoreInfo.list} />
          <SectionFooter />
        </div>
        {/* plus */}
        {isEmptyO(plusInfo) && <HomeSectionV2 infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home