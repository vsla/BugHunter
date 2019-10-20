import React from 'react';
import Container from '@material-ui/core/Container';

const DefaultContainer = (props) => (
  <Container maxWidth="lg" style={{height: '100%'}}>
    {props.children}
  </Container>
)

export default DefaultContainer;
