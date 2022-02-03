import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.TouchableOpacity`
  background-color: #f0f1f5;

  padding:15px;
  margin:0 20px;
  border-radius:8px;
`;

export const Box = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width:110px;
`;

export const CardIcon = styled(Feather).attrs({
  name:"credit-card",
  size: 22,
  color: "black",
})`
  
`;

export const MyCards = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;