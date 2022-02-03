import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  
`;

export const AllButtons = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 10px;
  
`;

export const FindTitle = styled.Text`
  font-size: 20px;
  padding:20px;
`;

export const BoxFind = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding:5px;
`;
