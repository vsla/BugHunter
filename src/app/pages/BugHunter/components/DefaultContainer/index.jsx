import React from 'react';
import Container from '@material-ui/core/Container';

const DefaultContainer = (props) => (
  <Container maxWidth="lg">
    {props.children}
  </Container>
)

export default DefaultContainer;
