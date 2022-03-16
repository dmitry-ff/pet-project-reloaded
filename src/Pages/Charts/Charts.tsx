import React from 'react';
import { CHART_NAMES } from "./data/CHART_NAMES";
import _ from 'lodash';
import { NavLink, Outlet } from 'react-router-dom';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import * as Styled from './Charts.styled';

const Charts: React.FC = (): EmotionJSX.Element => {
  return (
    <>
      <Styled.ChartsNav>
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
      </Styled.ChartsNav>
      <Outlet />
    </>
  );
}



export default Charts;