import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { fetchEntireDataAction } from '@/store/modules/entire';

const EntirePagination = memo(() => {
  // // 从redux中获取数据
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20) //向上取整
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  // 事件处理逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    // 回到顶部：
    window.scrollTo(0,0)
    // 更新页码：
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchEntireDataAction(pageCount - 1))
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} color="secondary" onChange={pageChangeHandle} />
            <div className="desc">
              {/* current: 0  1-20
              current: 1  21-40
           */}
              第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
            </div>
          </div>
        )
      }

    </PaginationWrapper>
  )
})

export default EntirePagination