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
  HideCash,
  HideLimit,

 } from './styles';

const Credit = ({openEye}) => {
  return (
  <Container>
    <BigBox>
      <Icon/>
      <Box>
        <Title>Credit Card</Title>
        <ArrowIcon/>
      </Box>
      <Bill>Open Bill</Bill>
      {openEye ? <Value>$65.00</Value> : <HideCash/>}
      {openEye ? <Limit>Available limit of $1,850.00</Limit> : <HideLimit/>}
    </BigBox>
  </Container>
  );
}

export default Credit;