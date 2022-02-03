import React from 'react';
import { 
  Container,
  BigBox,
  Icon,
  Box,
  Title,
  ArrowIcon,
  Bill,
  Value,
  Limit,


 } from './styles';

const Credit = () => {
  return (
  <Container>
    <BigBox>
      <Icon/>
      <Box>
        <Title>Credit Card</Title>
        <ArrowIcon/>
      </Box>
      <Bill>Open Bill</Bill>
      <Value>$65.00</Value>
      <Limit>Available limit of $1,850.00</Limit>
    </BigBox>
  </Container>
  );
}

export default Credit;