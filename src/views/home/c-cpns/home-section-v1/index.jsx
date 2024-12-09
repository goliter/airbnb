import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  // 从props中获取数据
  const { infoData } = props
  // 自己定义内部的数据
  // 1.
  const initialName = Object.keys(infoData.dest_list)[0]
  // 2.控制infoData在有值的情况下在渲染，第一次不被渲染
  const [name, setName] = useState(initialName)
  // 数据的转换
  const tabNames = infoData.dest_address?.map(item => item.name)

  // 事件处理函数
  // 给子组件传递函数，使用useCallback进行性能优化
  const tabClickHandle = useCallback(function (item, index) {
    // 根据item对数据进行过滤
    setName(item)
  }, [])
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
      <SectionFooter name={name}/>
    </SectionV1Wrapper >
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1