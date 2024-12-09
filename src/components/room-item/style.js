import styled from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  /* 宽度需要动态改变 */
  width: ${props => props.itemwidth};
  padding: 8px;
  flex-shrink: 0; //不压缩

  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    /* 图片宽高比不一致 */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
       display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;


      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 83px; */
        width: 50px;
        height: 100%;
        background: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%);
        }
      }
    }

    .indicator {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 9;
      bottom: 10px;
      width: 50%;
      margin: 0 auto;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;//刚好显示5个

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
         
        }
        .active {
            width: 8px;
            height: 8px;
            background-color: red;
          }
      }
    }

    .favor {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 10px;
    font-weight: 700;
    color: ${props => props.verifycolor};
  }

  .name {
    font-size: 14px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.color.textColor};
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;

    .count {
      margin: 0 2px 0 4px;
    }
    .ant-rate {
      font-size: 12px;
      color: #00848A;

      .ant-rate-star {
          margin-right: 2px;
        }
    }
  }
`