import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Weather from './Weather';
import TemperatureChart from './TemperatureChart';
import { CircularProgress, Box } from '@mui/material';
import { TResponse, TData } from '../Data/Types'

type TProps = {
  apiURL: string;
  townName: string
}

function WeatherData(props: TProps) {
  const [data, setData] = React.useState<TData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();
    axios.get<TResponse>(props.apiURL, { cancelToken: source.token })
      .then(res => {
        let items = res.data;
        setData(data => [...items.forecast.forecastday])
        setTimeout(() => setLoading(false), 1000)
        return res;
      })
      .then((res) => {
        source.cancel();
      })
      .catch(error => {
        console.log(error)
      })
  }, [props.apiURL])

  return (
    <>
      {loading &&

        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>}
      {!loading
        &&
        <div>
          <Weather loading={loading} nameHead={props.townName} data={data} />
          <TemperatureChart loading={loading} data={data} />
        </div>

      }
    </>
  )
};


export default WeatherData;
// export { }