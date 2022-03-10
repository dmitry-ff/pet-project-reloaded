import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Global, css } from '@emotion/react'

import { Chart, registerables } from 'chart.js';
import App from './App/App';
Chart.register(...registerables);

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
    <App />
  </>,
  document.getElementById('root')
);


reportWebVitals();
