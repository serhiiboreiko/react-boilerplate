import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 100px;
  color: ${props => {
    switch (props.type) {
      case 'dark': return '#141413';

      case 'light':
      default: return 'white';
    }
  }};
`;

const Title = ({ type = 'light', children }) => (
  <StyledTitle type={type}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Title;
