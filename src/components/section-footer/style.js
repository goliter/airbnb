import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  /* color: #008489; */

  .text {
    margin-right: 8px;
    font-size: 17px;
    font-weight: 600;
    /* color: #000; */
    color: ${props => props.color};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .icon {
    width: 10px;
    height: 10px;
    color: ${props => props.color};
  }
`