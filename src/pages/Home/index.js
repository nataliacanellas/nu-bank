import React from 'react';
import Button from '../../../components/Button';
import Greetings from '../../../components/Greetings';
import Money from '../../../components/Money';

import Pix from '../../../assets/Pix.png';
import Pay from '../../../assets/Pay.png';
import Transfer from '../../../assets/Transfer.png';
import Deposit from '../../../assets/Deposit.png';
import Cellphone from '../../../assets/Cellphone.png';
import Charge from '../../../assets/Charge.png';
import Global from '../../../assets/Global.png';
import Heart from '../../../assets/Heart.png';
import Shopp from '../../../assets/Shopp.png';
import Whats from '../../../assets/Whats.png';
import Friends from '../../../assets/Friends.png';

import { Container, AllButtons, FindTitle, BoxFind  } from './styles';
import Cards from '../../../components/Cards';
import Suggest from '../../../components/Suggest';
import Credit from '../../../components/Credit';
import Investment from '../../../components/Investment';
import LifeShop from '../../../components/LifeShop';
import FindOut from '../../../components/FindOut';

const Home = () => {
  return <Container>
    <Greetings/>
    <Money/>
    <AllButtons>
      <Button text="Pix Area" image={Pix}/>
      <Button text="Pay" image={Pay}/>
      <Button text="Transfer" image={Transfer}/>
      <Button text="Deposit" image={Deposit}/>
      <Button text={"Cellphone \nRecharge"} image={Cellphone}/>
      <Button text="Charge" image={Charge}/>
      <Button text={"Global \nTransfer"} image={Global}/>
    </AllButtons>
    <Cards/>
    <Suggest/>
    <Credit/>
    <Investment/>
    <LifeShop title="Life Insurance" text="Get to know Nubank Life: a simple insurance that fits your pocket." image={Heart}/>
    <LifeShop title="Shopping" text="Exclusive advantages from our favorite brands" image={Shopp}/>
    <FindTitle>Find out more</FindTitle>
    <BoxFind>
      <FindOut title="Invite Friends" text="Show to your friends how easy it is to have a life without worrying with paperwork." image={Friends}/>
      <FindOut title="WhatsApp" text="Safe Payments, fast and without fees. Nubank Experience without..." image={Whats}/>
    </BoxFind>
  </Container>;
}

export default Home;