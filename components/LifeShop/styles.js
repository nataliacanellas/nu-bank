import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';  


export const Container = styled.TouchableOpacity`
  padding:20px;
`;

export const Icon = styled.Image`
  width:40px;
  height:40px;
`;

export const Box = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 5px;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: "keyboard-arrow-right",
  size: 24,
  color: "#7c7d8b",
})`

`;

export const Text = styled.Text`
  font-size:14px;
  margin-top:15px;
  color: #7c7d8b;
`;
