import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 计算公式：2 offsetLeft + 2 width * 0.5 - indicator.width * 0.5
    // 1.获取selectIndex对应的Item
    const selectEl = contentRef.current.children[selectIndex]
    const itemLeft = selectEl.offsetLeft
    const itemWidth = selectEl.clientWidth

    // 2.获取content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 3.获取selectIndex要滚动的距离

    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4.左边的特殊情况处理
    if(distance < 0) distance = 0
    // 4.右边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance
    // 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`

  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={ contentRef }>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator