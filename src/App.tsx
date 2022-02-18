import React from 'react';
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
import { Context } from './Context';
Chart.register(...registerables);

const StyledComp = styled.div`
    display:inline-block;
    padding:1rem;
    
`

function App() {
  const [context, setContext] = React.useState(true)

  return (
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
        <Route path='Weather' element={
          <Context.Provider value={[context, setContext]}>
            <Weather />
          </Context.Provider>}
        />
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