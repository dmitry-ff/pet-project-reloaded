import React from 'react';
import axios from 'axios';
import { TemperatureChart, WeatherBlock, VanillasCanvasChart } from '..';
import { CircularProgress, Box } from '@mui/material';
import { TResponse, TData, TWeatherFetchData } from "../types";
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Switch } from '@mui/material';
import * as Styled from './WeatherGetData.styled';



function WeatherFetchData({ apiURL, townName }: TWeatherFetchData): EmotionJSX.Element {

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
    return <Styled.ErrorBlock>Неверное название города</Styled.ErrorBlock>
  }
  return (
    <div>
      <WeatherBlock loading={isLoading} nameHead={townName} data={data} />
      <Styled.SwitchDisplay>
        <span>Vanilla canvas</span>
        <Switch defaultChecked onClick={() => { setIsSwitch(isSwitch => !isSwitch) }} />
        <span>ChartJS</span>
      </Styled.SwitchDisplay>
      {isSwitch && <TemperatureChart loading={isLoading} data={data} />}
      {!isSwitch && <VanillasCanvasChart loading={isLoading} data={data} />}

    </div >
  )

};

export default WeatherFetchData;