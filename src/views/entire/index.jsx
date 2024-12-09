import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import {useDispatch } from 'react-redux'
import { fetchEntireDataAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'
// import AppHeader from '@/components/app-header'

const Entire = memo(() => {

  // 派发异步事件
  const dispatch = useDispatch()
  useEffect(() => {
    // window.scrollTo(0,0)
    dispatch(fetchEntireDataAction(0))
    // 修改头部状态
    dispatch(changeHeaderConfigAction({isFixed: true}))
  },[dispatch])
  return (
    <EntireWrapper>
      {/* <AppHeader/> */}
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire