import styled from "styled-components"

export const HeaderWrapper = styled.div`
 
 border-bottom: 1px solid #eee;
 

 &.fixed {
  position: fixed;
  z-index: 199;
  top: 0;
  left: 0;
  right: 0;
 }
 .content {
  position: relative;
  z-index: 99;
  background-color: #fff;
   .top {
    display: flex;
    align-items: center;
    height: 80px;
   }

   /* .search-area {
      height: 100px;
    } */
 }
 .cover {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
 }
 
`

export const SearchAreaWrapper = styled.div`
   transition: height 250ms ease;
   height: ${props => props.issearch ? "100px": "0"};
`