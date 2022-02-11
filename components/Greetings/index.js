import React from 'react';
import { 
  Container,
  Box1,
  Profile,
  ProfileIcon,
  BoxIcon,
  BoxEye,
  Eye,
  ClosedEye,
  BoxHelp,
  Help,
  BoxInvite,
  Invite,
  Name,
} from './styles';

const Greetings = ({openEye, setOpenEye}) => {
  return (
    <Container>
      <Box1>
        <Profile>
          <ProfileIcon/>
        </Profile>
        <BoxIcon>
          <BoxEye onPress={() => setOpenEye(!openEye)}>
            {openEye ? <Eye/> : <ClosedEye/>}
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