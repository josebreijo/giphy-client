import React from 'react';
import styled, { keyframes } from 'react-emotion';
import Container from '../Container';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const StyledSpinner = styled('div')`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 4px solid lightgrey;
  border-left-color: lightsalmon;
  border-radius: 50%;
  animation: ${rotate} 0.6s linear infinite;
`;
const Spinner = () => (
  <Container mt="20px">
    <StyledSpinner />
  </Container>
);

export default Spinner;
