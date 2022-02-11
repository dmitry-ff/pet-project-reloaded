// import React from 'react';
// import WeatherData from '../Components/WeatherData'
// import { Button, Input, Box, Link } from '@mui/material';
// import styled from '@emotion/styled';


// const Heading = styled.h2`
//     margin-top:50px;
//     font-size: 2.5em;
//     text-align: center;
//     color: rgb(66, 66, 66);
// `

// function Weather() {

//   const [url, setUrl] = React.useState('');
//   const [press, setPress] = React.useState(false);
//   const [InpValue, setValue] = React.useState('')

//   const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setUrl(url => url =
//       `http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=${InpValue}&days=3&aqi=no&alerts=no`);
//     setPress(true);
//     setValue('')
//   }
//   return (
//     <Box sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       width: "100%",
//     }}>
//       <form className='weatherForm' onSubmit={handleSubmit}>
//         <Heading>Where you want to check the weather</Heading>
//         <Box sx={{
//           width: '100%',
//           height: 230,
//           mt: 3,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-evenly',

//         }}>
//           <Input
//             margin='dense'
//             fullWidth={true}
//             value={InpValue}
//             onChange={(e) => setValue(e.target.value)}
//             type="text"
//             placeholder='...maybe in Paris?' />
//           {/* <Button
//             sx={{
//               width: 'fit-content',
//               alignSelf: 'center',
//             }}
//             margin='normal'
//             color='primary'
//             variant="contained">
//             Check weather
//           </Button> */}
//         </Box>
//       </form>
//       {press && <WeatherData apiURL={url} />}
//       <span>
//         {'Powered by '}
//         <Link
//           href="https://www.weatherapi.com/">WeatherAPI.com
//         </Link>
//       </span>
//     </Box>
//   );
// }

// export default Weather;

export { }