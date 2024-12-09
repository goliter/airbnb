import styled from "styled-components";

export const LeftWrapper = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  /* color: var(--primary-color); */
  color: ${props => props.theme.color.primaryColor};

  .logo {
    margin-left: 25px;
    cursor: pointer;
  }
  
`