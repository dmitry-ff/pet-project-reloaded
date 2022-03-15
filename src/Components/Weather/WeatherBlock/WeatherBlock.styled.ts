import { css } from '@emotion/react';
import styled from '@emotion/styled';
import rain from '../../../Images/7795646_weather_cloud_rain_icon.svg';
import snow from '../../../Images/8664916_snowflake_icon.svg';
export const WeatherData = styled.div`
    margin-bottom: 35px;
    border-radius: 10px;
    padding:20px;
    box-shadow: 0 0 10px rgba(219, 219, 219, 0.596);
    display: flex;
    margin:auto;
    flex-direction: column;
    align-content:center;
    height: 300px;
    width:max-content;
    min-width:600px;
    justify-content: space-between;
    >span{
        font-size:1.5em;
    }
  
`

export const WeatherToday = styled.div`
    display: flex;
    align-items:flex-end ;
    justify-content: space-between;
    div {
        margin-right:20px;
        display:flex;
    }
`
export const FirstColumn = styled.div`
    display: flex;
    align-items: flex-end;
    & > span{
        font-size: 3em;
    }

`

export const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-between;
        width: 150px;
    }
`

const baseStyle = css`
    position: absolute;
    content:'';
    right:-20px;
    
    display: inline-block;
    width: 17px;
    height: 17px;
    background-repeat: no-repeat;
    padding: 0;
`;

export const FourthColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-end;
    justify-content:space-between;

    & :first-of-type {
        position: relative;
        &:after{
            vertical-align: top;
            background-image:url(${rain});
            ${baseStyle};
        }
    }
    & :last-of-type {
        position: relative;
        &:after{
            vertical-align: center;
            background-image: url(${snow});
            ${baseStyle};
        }
    }
`


export const WeatherWeek = styled.div`
    display: flex;
    justify-content: space-evenly;
    > div{
        width: 100px;
        border-radius: 15px;
        padding: 15px 20px;
        box-shadow: 5px 5px 10px rgba(211, 211, 211, 0.712);
        background-color: rgba(225, 241, 245, 0.705);
    }
`

export const WeatherCard = styled.div`
        display: flex;
        > div{
            justify-content: space-around;
            display: flex;
            flex-direction: column;
            & :first-of-type{
               font-size:1.5em;
            }
            & :last-of-type{
                font-size:0.8em;   
                color: rgb(102, 102, 102);
            }
        }

`