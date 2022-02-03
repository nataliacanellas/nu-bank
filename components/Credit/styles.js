import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

export const Container = styled.View`
  padding:20px;
  
`;

export const BigBox = styled.TouchableOpacity`
`;

export const Icon = styled(Feather).attrs({
  name:"credit-card",
  size: 22,
  color: "black",
})`

`;
export const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size:20px;
  margin-top: 10px;
`;
export const ArrowIcon = styled(MaterialIcons).attrs({
  
  name: "keyboard-arrow-right",
  size: 24,
  color: "#7c7d8b",
})`

`;
export const Bill = styled.Text`
  color: #7c7d8b;
  margin-top: 10px;
`;
export const Value = styled.Text`
  font-size: 20px;
  margin-top: 6px;
`;
export const Limit = styled.Text`
  color: #7c7d8b;
  margin-top: 6px;
`;

