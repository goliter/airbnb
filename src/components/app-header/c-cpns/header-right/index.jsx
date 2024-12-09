import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // 定义组件内部状态
  // 控制 panel 的隐藏
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // 监听window的点击,设置为true ，就是事件捕获而不是冒泡
    window.addEventListener("click", windowHandleClick, true)

    return () => {
      // 取消监听
      window.removeEventListener("click", windowHandleClick, true)
    }
  },[])

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {/* Profile 点击面板切换效果 */}
        {
          showPanel && (
            <div className="panel">
              <div className="tops">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight