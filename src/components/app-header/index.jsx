import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'

const AppHeader = memo(() => {
  // 定义组件内部状态，记录是否是搜索状态
  const [isSearch, setIsSearch] = useState(false)
  // 从redux中获取数据
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed } = headerConfig

  /** 监听滚动的监听 */
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = scrollY
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={e => setIsSearch(true)} />
          <HeaderRight />
        </div>
        <SearchAreaWrapper issearch={isSearch}>
          {/* <div className="search-area"></div> */}
        </SearchAreaWrapper>
      </div>
      {isSearch && <div className="cover" onClick={e =>setIsSearch(false)}></div>}

    </HeaderWrapper>
  )
})

export default AppHeader