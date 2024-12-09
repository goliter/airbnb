import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  // // 从redux中获取数据
  const { roomList, totalCount,isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)


  // 事件处理
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((item) => {
    // 点击跳转详情存储详情数据
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate,dispatch])
  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList.map((item) => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClickHandle} />
            )
          })
        }
      </div>

      {/* 蒙版 */}
      {isLoading && <div className="cover"></div>}
      
    </RoomsWrapper>
  )
})

export default EntireRooms