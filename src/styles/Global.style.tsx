import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  :root {
    --primary-green-color: #013327; 
    --off-white-color: #f9f9f9;
    --beige-color: #E4DAD2;
    --brown-color: #100B0D;  
  }
`;

export default GlobalStyle;
