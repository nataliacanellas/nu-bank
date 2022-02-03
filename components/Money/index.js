import React from 'react';
import { 
  Container,
  Box2,
  Account,
  ArrowIcon,
  Cash,
 } from './styles';

const Money = () => {
  return (
    <Container>
      <Box2>
        <Account>Account</Account>
        <ArrowIcon/>
      </Box2>
      <Cash>$30,000.00</Cash>
    </Container>
  );}

export default Money;