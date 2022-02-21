import React from 'react';
import axios from 'axios';
import Weather from './WeatherBlock';
import TemperatureChart from './TemperatureChart';
import { CircularProgress, Box } from '@mui/material';
import { TResponse, TData, TContext } from '../../Data/Types';
import { Context } from '../../Context'

type TProps = {
  apiURL: string;
  townName: string;
}


function WeatherData({ apiURL, townName }: TProps) {

  const [data, setData] = React.useState<TData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { context, setContext } = React.useContext(Context) as TContext;

  axios.interceptors.response.use(response => {
    return response
  }, (error) => {
    setContext(context ? !context : context);

  }
  )

  React.useEffect(() => {
    setLoading(true);
    axios.get<TResponse>(apiURL)
      .then(res => {
        let items = res.data;
        setData(data => [...items.forecast.forecastday])
        setTimeout(() => setLoading(false), 1000)
        return res;
      })
      .catch(error => { })

  }, [apiURL]);
  if (!context) { return null };
  return (
    <>
      {loading &&
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }

      {!loading
        &&
        <div>
          <Weather loading={loading} nameHead={townName} data={data} />
          <TemperatureChart loading={loading} data={data} />
        </div>

      }
    </>
  )
};

export default WeatherData;
// export { }