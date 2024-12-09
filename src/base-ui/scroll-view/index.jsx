import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //占据的宽度
    const totalDistance = scrollWidth - clientWidth //可以滚动的距离
    totalDistanceRef.current = totalDistance //记录totalDistance，并且值改变不刷新页面
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件处理逻辑
  // function leftClickHandle() {
  //   const newIndex = posIndex - 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   const newOffsetLeft = newEl.offsetLeft
  //   scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
  //   setPosIndex(newIndex)
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)
  //   setShowLeft(newOffsetLeft > 0)
  // }
  // function rightClickHandle() {
  //   // 点击右边按钮，每次向左移动一个item
  //   const newIndex = posIndex + 1
  //   const newEl = scrollContentRef.current.children[newIndex]
  //   // 注： offsetLeft相对于定位元素，要加定位，如果没有定位，相对于body
  //   // console.log('newEl',newEl.offsetLeft);
  //   const newOffsetLeft = newEl.offsetLeft
  //   scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
  //   setPosIndex(newIndex)
  //   // 是否继续显示右边的按钮
  //   setShowRight(totalDistanceRef.current > newOffsetLeft)

  //   // 是否显示左边的按钮
  //   setShowLeft(newOffsetLeft > 0)
  // }

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {/* 左边按钮 */}
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}

      {/* 右边按钮 */}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      {/* 内容 */}
      <div className='scroll'>
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView