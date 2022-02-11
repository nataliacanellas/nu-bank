import React from 'react';
import { 
  Container,
  Box2,
  Account,
  ArrowIcon,
  Cash,
  HideCash,
  
 } from './styles';

const Money = ({openEye}) => {
  return (
    <Container>
      <Box2>
        <Account>Account</Account>
        <ArrowIcon/>
      </Box2>
      {openEye ? <Cash>$30,000.00</Cash> : <HideCash/>}
    </Container>
  );}

export default Money;