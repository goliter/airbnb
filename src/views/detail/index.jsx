import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
// import AppHeader from '@/components/app-header'
// import DetailInfos from './c-cpns/detail-infos'

const Detail = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false}))
  },[dispatch])

  return (
    <DetailWrapper>
      {/* <AppHeader/> */}
      <DetailPictures/>
      {/* <DetailInfos/> */}
    </DetailWrapper>
  )
})

export default Detail