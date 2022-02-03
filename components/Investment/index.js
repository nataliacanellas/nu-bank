import React from 'react';
import { 
  Container,
  Container2,
  Icon,
  BoxTitle,
  Title,
  ArrowIcon,
  Text,
  Button,
  Icon1,
  Text2,

} from './styles';

const Investment = () => {
  return (
  <Container>
    <Container2>
      <Icon/>
      <BoxTitle>
        <Title>Investments</Title>
        <ArrowIcon/>
      </BoxTitle>
      <Text>The Nu way of investing: no asteriskes, easy language and from $1.00. Find out more.</Text>
    </Container2>
    <Button>
      <Icon1/>
      <Text2>Check balance to transfer</Text2>
    </Button>
  </Container>
  );
}

export default Investment;