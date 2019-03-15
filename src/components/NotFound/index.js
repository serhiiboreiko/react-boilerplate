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
  font-size: 150px;
  font-weight: bold;
  color: #141413;
  margin-bottom: 12px;
  font-family: 'Arial';
`;

const Link = styled(NavLink)`
  font-family: 'Arial';
  text-decoration: none;
  color: black;
  opacity: 0.5;

  &:hover { opacity: 1; }
`;

const NotFound = () => (
  <Wrap>
    <Code>1404</Code>
    <Link to="/" onMouseEnter={FirstPage.preload}>Home</Link>
  </Wrap>
);

export default NotFound;
