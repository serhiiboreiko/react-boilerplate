import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: ${props => props.theme.yellow};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #141413;
  opacity: 0.5;
  font-size: 20px;
  margin-top: 12px;

  &:hover { opacity: 1; }
`;
