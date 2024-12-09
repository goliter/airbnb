import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 40px 20px;
  margin-top: 128px;
  .title {
    margin: 0 0 10px 10px;
    font-weight: 700;
    font-size: 22px;
    color: #222;
  }
 .list {
  display: flex;
  flex-wrap: wrap;
 }
 > .cover {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(255,255,255,.8);
 }
`