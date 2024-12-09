import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rate } from "antd"
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
import IconFavor from '@/assets/svg/icon-favor';

const RoomItem = memo((props) => {

  const { itemData, itemWidth = "25%",itemClick } = props

  const [selectIndex, setSelectIndex] = useState(0)
  const swiperRef = useRef()

  // 事件处理
  function controlClickHandle(isRight = true,event) {
    // 上一个/下一个
    isRight ? swiperRef.current.next() : swiperRef.current.prev()

    // 拿到最新索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }

  // 跳转详情
  function itemClickHandle() {
    if(itemClick) itemClick(itemData)
  }

  // 子元素赋值
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const swiperElement = (
    // 轮播图
    <div className="swiper">
      {/* 自定义箭头 */}
      <div className="control">
        <div className="btn left" onClick={e => controlClickHandle(false,e)}>
          <IconArrowLeft width="25" height="25" />
        </div>
        <div className="btn right" onClick={e => controlClickHandle(true,e)}>
          <IconArrowRight width="25" height="25" />
        </div>
      </div>
      {/* 指示器 */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div
                  className="dot-item"
                  key={index}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={swiperRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      {/* 收藏图标 */}
      <div className="favor">
        <IconFavor/>
      </div>
    </div>
  )

  return (
    <ItemWrapper
      verifycolor={itemData?.verify_info?.text_color || "#39576a"}
      itemwidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">

        {!itemData.picture_urls ? pictureElement : swiperElement}

        <div className="desc">
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className="name">
          {itemData.name}
        </div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rate allowHalf disabled defaultValue={itemData.star_rating ?? 5} size="small" />
          <span className='count'>{itemData.reviews_count}</span>
          {itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem