import React from 'react';
import { 
  Container,
  Box,
  CardIcon,
  MyCards,
 } from './styles';


const Cards = () => {
  return (
    <Container>
      <Box>
        <CardIcon/>
        <MyCards>My Cards</MyCards>
      </Box>
    </Container>
  );
}

export default Cards;