import React from 'react';
import axios from 'axios';
import TemperatureChart from './TemperatureChart';
import { CircularProgress, Box } from '@mui/material';
import { TResponse } from "../../Data/Types/TResponse";
import { TData } from "../../Data/Types/TData";
import { TContext } from "../../Data/Types/TContext";
import { Context } from '../../Context'
import WeatherBlock from './WeatherBlock';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';

type TProps = {
  apiURL: string;
  townName: string;
}
const ErrorBlock = styled.div`
  padding:10px 45px;
  background-color:rgba(240, 15, 71,0.1);
  border:1px solid rgb(246, 66, 95);
  border-radius:10px;
  margin-bottom:15px;

`

function WeatherGetData({ apiURL, townName }: TProps): EmotionJSX.Element {

  const [data, setData] = React.useState<TData[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false)

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
      <TemperatureChart loading={isLoading} data={data} />
    </div>
  )

};

export default WeatherGetData;