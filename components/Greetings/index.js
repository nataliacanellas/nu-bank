import React from 'react';
import { 
  Container,
  Box1,
  Profile,
  ProfileIcon,
  BoxIcon,
  BoxEye,
  Eye,
  BoxHelp,
  Help,
  BoxInvite,
  Invite,
  Name,
} from './styles';

const Greetings = () => {
  return (
    <Container>
      <Box1>
        <Profile>
          <ProfileIcon/>
        </Profile>
        <BoxIcon>
          <BoxEye>
            <Eye/>
          </BoxEye>
          <BoxHelp>
            <Help/>
          </BoxHelp>
          <BoxInvite>
            <Invite/>
          </BoxInvite>
        </BoxIcon>
      </Box1>
      <Name>Hello, Naty!</Name>
    </Container>
  );
}

export default Greetings;