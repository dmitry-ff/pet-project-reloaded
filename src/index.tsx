import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Global, css } from '@emotion/react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Pages/Home'
import Charts from './Pages/Charts';
import styled from '@emotion/styled';
import PieChart from './Components/Charts/PieChart';
import DoughnutChart from './Components/Charts/DoughnutChart';
import BarChart from './Components/Charts/BarChart';
import LineChart from './Components/Charts/LineChart'
import { userData, lineUserData } from './Data/Data';
import Weather from './Pages/Weather';
import ReactFeatures from './Pages/ReactFeatures';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const myContext = React.createContext(true)

const StyledComp = styled.div`
    display:inline-block;
    padding:1rem;
    
`

ReactDOM.render(
  <>
    <Global styles={css`
            body{
                margin: 0;
                box-sizing: border-box;
                font-family: 'Roboto';
                background-color: rgb(255, 255, 255);
            }
        `} />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={
          <Home />
        } >
        </Route>
        <Route path='Charts' element={<Charts />} >
          <Route
            index
            element={<StyledComp>Select a chart!</StyledComp>}
          />

          <Route path='LineChart' element={<LineChart data={lineUserData} />} />
          <Route path='PieChart' element={<PieChart data={userData} />} />
          <Route path='DoughnutChart' element={<DoughnutChart data={userData} />} />
          <Route path='BarChart' element={<BarChart data={userData} />} />



        </Route>
        <Route path='Weather' element={<Weather />} />
        <Route path='reactfeatures' element={<ReactFeatures />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);


reportWebVitals();
