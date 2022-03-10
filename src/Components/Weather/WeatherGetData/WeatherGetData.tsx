import React from 'react';
import axios from 'axios';
import TemperatureChart from '../TemperatureChart/TemperatureChart';
import { CircularProgress, Box } from '@mui/material';
import { TResponse } from "../../../Data/Types/TResponse";
import { TData } from "../../../Data/Types/TData";

import WeatherBlock from '../WeatherBlock/WeatherBlock';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import Chart from '../CanvasChart/CanvasChart';
import { Switch } from '@mui/material';
import { ErrorBlock, SwitchDisplay } from './WeatherGetDataStyled';

type TProps = {
  apiURL: string;
  townName: string;
}

function WeatherGetData({ apiURL, townName }: TProps): EmotionJSX.Element {

  const [data, setData] = React.useState<TData[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isSwitch, setIsSwitch] = React.useState<boolean>(true);

  React.useEffect(() => {
    axios.get<TResponse>(apiURL)
      .then(res => {
        setLoading(true);
        let items = res.data;
        setData(data => [...items.forecast.forecastday])
        setLoading(false);
        setIsError(false);
        return res
      })
      .catch(error => {
        setLoading(false)
        setIsError(true)
        throw new Error(error)
      })
  }, [apiURL, isError]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }
  if (isError && !isLoading) {
    return <ErrorBlock>Неверное название города</ErrorBlock>
  }

  return (
    <div>
      <WeatherBlock loading={isLoading} nameHead={townName} data={data} />
      <SwitchDisplay>
        <span>Vanilla canvas</span>
        <Switch defaultChecked onClick={() => { setIsSwitch(isSwitch => !isSwitch) }} />
        <span>ChartJS</span>
      </SwitchDisplay>
      {isSwitch && <TemperatureChart loading={isLoading} data={data} />}
      {!isSwitch && <Chart loading={isLoading} data={data} />}

    </div >
  )

};

export default WeatherGetData;