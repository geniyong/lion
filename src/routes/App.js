import React from 'react';
import styled from 'styled-components';
import Frame from 'routes/Frame';
const Root = styled.div ``;
const Body = styled.div `
  display: flex;
  min-height: 100vh;
`;
const App = () => (React.createElement(Root, null,
    React.createElement(Body, null,
        React.createElement(Frame, null))));
export default App;
