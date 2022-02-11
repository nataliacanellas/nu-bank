import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.SafeAreaView`
  height: 180px;
  background-color: ;#830ad1
`;

export const Box1 = styled.View`
  height:60px;
  margin: 20px;
  margin-top: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.TouchableOpacity.attrs({
  activeOpacity:0.4
})`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #9c3bd8;
  align-items: center;
  justify-content: center;

`;

export const ProfileIcon = styled(Feather).attrs({
  name: "user",
  size: 30,
  color: "white",
})`

`;

export const BoxIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;

export const BoxEye = styled.TouchableOpacity.attrs({
  activeOpacity:0.4
})`

`;

export const Eye = styled(Feather).attrs({
  name: "eye",
  size: 28,
  color: "white",
})`

`;

export const ClosedEye = styled(Feather).attrs({
  name: "eye-off",
  size: 28,
  color: "white",
})`
`;

export const BoxHelp = styled.TouchableOpacity.attrs({
  activeOpacity:0.4
})`

`;

export const Help = styled(Feather).attrs({
  name: "help-circle",
  size: 28,
  color: "white",
})`

`;

export const BoxInvite = styled.TouchableOpacity.attrs({
  activeOpacity:0.4
})`

`;

export const Invite = styled(MaterialCommunityIcons).attrs({
  name: "email-plus-outline",
  size: 28,
  color: "white",
})`

`;

export const Name = styled.Text`
  color: #FFF;
  font-size: 24px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: 500;

`;