
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
    line-height: 1.5;
    
    body {
      background-color: #fff;
    }
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  //max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 2px;

  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
    width: 100%;
  }
`;

export default GlobalStyle;
