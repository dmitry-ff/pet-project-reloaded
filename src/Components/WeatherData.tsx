// import React from 'react';
// import axios from 'axios';
// import _ from 'lodash';
// import Weather from './Weather';
// import TemperatureChart from './TemperatureChart';
// import { CircularProgress, Box } from '@mui/material';
// import { TResponse } from '../Data/Types'

// type TProps = {
//   apiURL: string;
// }


// function WeatherData(props: TProps) {
//   const [data, setData] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     setLoading(true);
//     const source = axios.CancelToken.source();
//     axios.get(props.apiURL, { cancelToken: source.token })
//       .then((res: TResponse) => {
//         let items = res.data.forecast.forecastday;
//         setData(_.slice(Object.entries(res.data.location), 0, 1));
//         setData(data => [...data, ...items]);
//         setTimeout(() => setLoading(false), 1000)
//         return res;
//       })
//       .then((res) => {
//         source.cancel();
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }, [props.apiURL])

//   return (
//     <>
//       {loading &&

//         <Box sx={{ display: 'flex' }}>
//           <CircularProgress />
//         </Box>}
//       {!loading
//         &&
//         <div>
//           <Weather loading={loading} nameHead={_.head(data)[1]} data={_.slice(data, 1)} />
//           <TemperatureChart loading={loading} chartData={_.slice(data, 1)} />
//         </div>

//       }
//     </>
//   )
// };


// export default WeatherData;
export { }