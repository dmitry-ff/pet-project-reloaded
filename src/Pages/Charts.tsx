import React from 'react';
import styled from '@emotion/styled';
import { CHART_NAMES } from '../Data/Consts'
import _ from 'lodash';
import { NavLink, Outlet } from 'react-router-dom';
const ChartsNav = styled.div`
    width:fit-content;
    display: inline-block;
    vertical-align:top;
    flex-direction: column;
        &>a{
        color: rgb(128, 122, 122);
        width:120px;
        padding: 10px 20px;
        text-decoration: none;
            &:hover{
                background-color: rgba(238, 237, 237, 0.548);
    };
`;

const Charts = () => {
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