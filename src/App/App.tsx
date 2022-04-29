import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { PieChart, DoughnutChart, BarChart, LineChart } from '../Components/ChartJS-charts-examples';
import { Navigation } from '../Components';
import { Charts, Home, ReactFeatures, Weather } from '../Pages';
import { userData, lineUserData } from './data';
import { Chart, registerables } from 'chart.js';
import { StyledComp } from './App.styled';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={
          <Home />
        }>
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
        <Route path='Weather' element={
          <Weather />
        } />
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
  )
}

export default App