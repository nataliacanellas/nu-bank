import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding:20px;
  margin-right:15px;
`;

export const Suggest1 = styled.TouchableOpacity`
  background: #f1f2f5;
  border-radius: 8px;
  margin-right: 15px;
  width:370px;
  padding:20px;
`;

export const Text1 = styled.Text`
  font-size:16px;

`;

export const Text2 = styled.Text`
  color: #9247b1;
  font-size:16px;
  
`;

export const Text3 = styled.Text`
  font-size:16px;

`;

export const Box = styled.View`
  flex-direction: row;
`;
