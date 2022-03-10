import React from 'react';
import { CHART_NAMES } from "../../Data/Consts/CHART_NAMES";
import _ from 'lodash';
import { NavLink, Outlet } from 'react-router-dom';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { ChartsNav } from './ChartsStyled';

const Charts: React.FC = (): EmotionJSX.Element => {
  return (
    <>
      <ChartsNav>
        {
          _.map(CHART_NAMES, (item, index) => <NavLink
            style={({ isActive }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : ""
            })}
            key={index}
            to={item}>{item}</NavLink>)
        }
      </ChartsNav>
      <Outlet />
    </>
  );
}



export default Charts;