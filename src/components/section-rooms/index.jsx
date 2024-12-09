import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { RoomWrapper } from './style'

const SectionRooms = memo((props) => {
  const {roomList = [], itemWidth} = props
  return (
    <RoomWrapper>
      {
        roomList?.slice(0, 8)?.map((item) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}></RoomItem>
          )
        })
      }
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms