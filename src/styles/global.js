import { createGlobalStyle } from 'styled-components';

import { normalize } from 'polished';

console.log(normalize);
const GlobalStyle = createGlobalStyle`
  ${normalize()}
`;

export default GlobalStyle;
