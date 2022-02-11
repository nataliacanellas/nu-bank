import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity:0.4
})`
  height: 120px;
  margin-top: 10px;
  padding:20px;
`;

export const Box2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Account = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: "keyboard-arrow-right",
  size: 24,
  color: "#7c7d8b",
})`
`;

export const Cash = styled.Text`
  font-size:24px;
  margin-top:20px;
`;

export const HideCash = styled.View`
  background: #f0f1f5;
  height: 30px; 
  width: 60%;
  margin-top:20px;
`;
