import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import FirstPage from 'src/components/FirstPage/Loadable';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Code = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: #141413;
  margin-bottom: 12px;
`;

const onHover = () => FirstPage.preload();

const NotFound = () => (
  <Wrap>
    <Code>404</Code>
    <NavLink to="/" onMouseEnter={onHover}>Home</NavLink>
  </Wrap>
);

export default NotFound;
