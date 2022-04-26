import React from 'react';
import { CHART_NAMES } from "./data/CHART_NAMES";
import { NavLink, Outlet } from 'react-router-dom';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import './Charts.css';
import * as Styled from './Charts.styled';

const Charts: React.FC = (): EmotionJSX.Element => {
  return (
    <>
      <Styled.ChartsNav>
        {
          CHART_NAMES.map((item, index) => <NavLink
            className={'link'}

            key={index}
            to={item}>{item}</NavLink>)
        }
      </Styled.ChartsNav>
      <Outlet />
    </>
  );
}



export default Charts;