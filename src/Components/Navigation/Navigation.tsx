import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { NavigationDiv, Logo, Navbar } from './NavigationStyle';
import dog from '../../Images/dog.svg';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

const Navigation: React.FC = (): EmotionJSX.Element => {
  return (
    <>
      <NavigationDiv>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Logo >
            <h2>PET</h2>
            <img src={dog} alt='dog'></img>
            <h2>PROJECT</h2>
          </Logo>
        </Link>
        <Navbar>
          <Link to='Charts'>Charts</Link>
          <Link to='Weather' >Weather</Link>
          <Link to="ReactFeatures">React Features</Link>
        </Navbar>
      </NavigationDiv>
    </>
  );
}

export default Navigation