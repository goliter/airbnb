import styled from "styled-components";


export const TabsWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  /* overflow-x: auto; */
  .item {
    box-sizing: border-box;
    /* 设置最小宽度 */
    flex-basis: 90px;
    flex-shrink: 0;
    padding: 8px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: #00848A;
    }
  }
`