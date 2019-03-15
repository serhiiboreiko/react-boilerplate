// Absolute imports
import React from 'react';

// Components
import Title from 'src/components/shared/Title';

// Styled
import { Container, Link } from './styled';

const FirstPage = () => (
  <Container>
    <Title>First page</Title>
    <Link to="/second-page">Go to Second page</Link>
  </Container>
);

export default FirstPage;
