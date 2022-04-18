import * as React from 'react';
import Directory from '../components/directory/Directory'; 
import {HomepageTitle , TitleContainer} from './Home-Style'

const Home =()=> {
  
  return (
    <div>
      <TitleContainer>
        <HomepageTitle>The best online shopping website!</HomepageTitle>
      </TitleContainer>
      <Directory />
    </div>
     
  );
}

export default Home;
