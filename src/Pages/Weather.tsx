import React from 'react';
import WeatherData from '../Components/WeatherData'
import { Button, Box, Link, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import * as yup from 'yup';
import { useFormik } from 'formik';


const Heading = styled.h2`
    margin-top:50px;
    font-size: 2.5em;
    text-align: center;
    color: rgb(66, 66, 66);
`
const validationSchema = yup.object({
  text: yup
    .string()
    .required('This field is required')
})
const Weather: React.FC = (): EmotionJSX.Element => {

  const [url, setUrl] = React.useState<string>('');
  const [press, setPress] = React.useState<boolean>(false);
  const [InpValue, setValue] = React.useState<string>('');
  const [town, setTown] = React.useState<string>('')


  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUrl(url => url =
      `http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=${InpValue}&days=3&aqi=no&alerts=no`);
    setPress(true);
    setTown(InpValue.slice(0, 1).toUpperCase() + InpValue.slice(1));
    setValue('')
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%",
    }} >
      <form className='weatherForm' onSubmit={handleSubmit}>
        <Heading>Where you want to check the weather</Heading>
        <Box sx={{
          width: '100%',
          height: 230,
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',

        }}>
          <TextField
            name="text"
            id='text'
            placeholder='...maybe in Paris?'
            margin='dense'
            fullWidth={true}
            value={InpValue}
            onChange={(e) => setValue(e.target.value)}
            type="text"

          />
          <Button
            sx={{
              width: 'fit-content',
              alignSelf: 'center',
            }}
            color='primary'
            variant="contained">
            Check weather
          </Button>
        </Box>
      </form>
      {press && <WeatherData apiURL={url} townName={town} />}
      <span>
        {'Powered by '}
        <Link
          href="https://www.weatherapi.com/">WeatherAPI.com
        </Link>
      </span>
    </Box >
  );
}

export default Weather;
