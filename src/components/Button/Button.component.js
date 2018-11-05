import React from 'react';

import styled from 'react-emotion';

const Button = styled('button')`
  padding: 1em 2em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
