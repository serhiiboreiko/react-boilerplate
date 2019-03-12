import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: white;
  border: 2px solid ${props => props.theme.blue};
  width: 200px;
  height: 44px;
  border-radius: 4px;
  font-family: 'Arial';
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;

  &:focus { box-shadow: 0 5px 10px 0 rgba(0, 0, 255, 0.1); }
`;

const Input = ({ onChange, value }) => (
  <StyledInput
    type="text"
    onChange={onChange}
    value={value}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
