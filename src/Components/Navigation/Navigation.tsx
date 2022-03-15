import React from 'react'
import { Link } from 'react-router-dom';
import * as Styled from './Navigation.styled';
import dog from '../../Images/dog.svg';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

const Navigation: React.FC = (): EmotionJSX.Element => {
  return (
    <>
      <Styled.NavigationDiv>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Styled.Logo >
            <h2>PET</h2>
            <img src={dog} alt='dog'></img>
            <h2>PROJECT</h2>
          </Styled.Logo>
        </Link>
        <Styled.Navbar>
          <Link to='Charts'>Charts</Link>
          <Link to='Weather' >Weather</Link>
          <Link to="ReactFeatures">React Features</Link>
        </Styled.Navbar>
      </Styled.NavigationDiv>
    </>
  );
}

export default Navigation