// Absolute imports
import React from 'react';

// Components
import Title from 'src/components/shared/Title';

// Styled
import { Container, Link } from './styled';

const SecondPage = () => (
  <Container>
    <Title type="dark">Second page</Title>
    <Link to="/404">Not found page</Link>
  </Container>
);

export default SecondPage;
