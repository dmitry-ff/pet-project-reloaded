import React, { useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Weather from './Weather';
import TemperatureChart from './TemperatureChart';
import { CircularProgress, Box } from '@mui/material';
import { TResponse, TData } from '../Data/Types'

type TProps = {
  apiURL: string;
  townName: string;
}

function WeatherData(props: TProps) {
  const [data, setData] = React.useState<TData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { apiURL, townName } = props;
  React.useEffect(() => {
    setLoading(true);

    const source = axios.CancelToken.source();
    axios.get<TResponse>(apiURL, { cancelToken: source.token })
      .then(res => {
        let items = res.data;
        setData(data => [...items.forecast.forecastday])
        setTimeout(() => setLoading(false), 1000)
        return res;
      })

      .catch(error => {
        console.error();
      })
    return (() => { })
  }, [apiURL]);

  return (
    <>
      {loading &&
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>}
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