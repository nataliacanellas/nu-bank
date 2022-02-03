import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export const Container = styled.View`
  padding: 20px;
`;

export const Container2 = styled.TouchableOpacity`

`;

export const Icon = styled(MaterialIcons).attrs({
  name: "signal-cellular-alt",
  size: 24,
  color: "black",
})`

`;

export const BoxTitle = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: "keyboard-arrow-right",
  size: 24,
  color: "#7c7d8b",
})`

`;

export const Text = styled.Text`
  color: #7c7d8b;
  font-size: 14px;
  margin-top: 10px;

`;

export const Button = styled.TouchableOpacity`
  height:45px;
  border-radius: 8px;
  background: #f1f2f5;

  flex-direction: row;
  align-items: center;
  
  margin-top: 20px;
`;

export const Icon1 = styled(FontAwesome).attrs({
  name: "money",
  size: 24,
})`
  margin-left: 15px;
`;

export const Text2 = styled.Text`
  font-size: 16px;
  margin-left: 25px;
`;