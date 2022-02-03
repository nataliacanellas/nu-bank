import React from 'react';
import { 
  Container,
  Suggest1,
  Text1,
  Text2,
  Text3,
  Box,
 } from './styles';

const Suggest = () => {
  return (
  <Container>
    <Suggest1>
      <Box>
      <Text1>Get to know </Text1>
      <Text2>Nubank Life:</Text2>
      </Box>
      <Text3>a simple insurance that fits your...</Text3>
    </Suggest1>
    <Suggest1>
      <Text1>Save your Friends from paperwork.</Text1>
      <Text2>Share Nubank with them...</Text2>
    </Suggest1>
  </Container>
);}

export default Suggest;