import React from 'react';
import WeatherData from '../Components/Weather/WeatherGetData'
import { Button, Box, Link, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { useFormik } from "formik";
import { Context } from '../Context';
import { TContext } from '../Data/Types';

const Heading = styled.h2`
    margin-top:50px;
    font-size: 2.5em;
    text-align: center;
    color: rgb(66, 66, 66);
`
interface IFormik {
  searchField: string,
}


const Weather: React.FC = (): EmotionJSX.Element => {

  const [url, setUrl] = React.useState<string>('');
  const [press, setPress] = React.useState<boolean>(false);
  const [town, setTown] = React.useState<string>('')
  const [context, setContext] = React.useContext(Context) as TContext;

  const validate = (values: IFormik,) => {
    let errors = {} as IFormik;
    if (!values.searchField) {
      errors.searchField = 'Required'
    } else if
      (!/^([a-zа-яё]+)$/i.test(values.searchField)) {
      errors.searchField = 'Incorrect Entry'
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      searchField: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setUrl(url => url =
        `http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=${formik.values.searchField}&days=3&aqi=no&alerts=no`);
      setPress(true);
      setTown(values.searchField.slice(0, 1).toUpperCase() + values.searchField.slice(1));
      resetForm();
      setContext(true)
    }
  })

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%",
    }} >
      <Heading>Where do you whant to check wheather?</Heading>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{
          width: '40em',
          height: 150,
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly'
        }}>
          <TextField
            placeholder='...maybe in Paris?'
            autoComplete='off'
            id='searchField'
            name='searchField'
            value={formik.values.searchField}
            onChange={formik.handleChange}
            error={(formik.touched.searchField && Boolean(formik.errors.searchField)) || (!context)}
            helperText={(formik.touched.searchField && formik.errors.searchField) || (!context && 'Incorrect Entry')}

          />

          <Button
            type='submit'
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
    </Box>
  );
}

export default Weather;
