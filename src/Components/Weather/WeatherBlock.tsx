import _, { isEmpty } from 'lodash';
import React from 'react';
import { WEEK_S } from "../../Data/Consts/WEEK_S";
import { WeatherData, WeatherToday, FirstColumn, SecondColumn, FourthColumn, WeatherWeek, WeatherCard } from '../../Style/Weather'
import { TLoading } from "../../Data/Types/TLoading";
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
type THead = {
  nameHead: string;
}
type TData = {
  data: {
    date: string,
    day: {
      maxtemp_c: number,
      mintemp_c: number,
      avgtemp_c: number,
      maxwind_kph: number,
      daily_chance_of_rain: number,
      daily_chance_of_snow: number,
      condition: {
        text: string,
        icon: string
      }
    }
  }[]
}

const WeatherBlock: React.FC<TLoading & THead & TData> = ({ loading, nameHead, data }): EmotionJSX.Element | null => {
  console.log(loading, 'LOADING')
  console.log(data, 'DATA');

  if (!loading && isEmpty(data)) return null

  return (
    <WeatherData>
      <span >
        Weather in <b>{nameHead}</b>
      </span>
      <WeatherToday>
        <FirstColumn>
          <span>{_.head(data)!.day.avgtemp_c > 0 ? '+' + _.floor(_.head(data)!.day.avgtemp_c) : _.floor(_.head(data)!.day.avgtemp_c)}°</span>
          <img src={_.head(data)!.day.condition.icon} alt={_.head(data)!.day.condition.text} />
        </FirstColumn>
        <SecondColumn>
          <span>{_.head(data)!.day.condition.text}</span>
          <div>
            <span>max <b>{_.head(data)!.day.maxtemp_c > 0 ? '+' + _.floor(_.head(data)!.day.maxtemp_c) : _.floor(_.head(data)!.day.maxtemp_c)}</b></span>
            <span>min <b>{_.head(data)!.day.mintemp_c > 0 ? '+' + _.floor(_.head(data)!.day.mintemp_c) : _.floor(_.head(data)!.day.mintemp_c)}</b></span>
          </div>
        </SecondColumn>
        <div>
          <span>Wind speed  <b>{(_.head(data)!.day.maxwind_kph / 3.6).toFixed(1)} m/s</b></span>
        </div>
        <FourthColumn>
          <span>{_.head(data)!.day.daily_chance_of_rain} %</span>
          <span>{_.head(data)!.day.daily_chance_of_snow} %</span>
        </FourthColumn>
      </WeatherToday>

      <WeatherWeek>
        {!loading && <>
          {
            _.map(data, (item, index) =>
              <div key={index}>
                <div>
                  {index === 0 ?
                    'Today'
                    : `${WEEK_S[new Date(item.date).getDay()]}, ${new Date(item.date).getDate()} `}
                </div>
                <WeatherCard>
                  <div>
                    <span>{item.day.maxtemp_c > 0 ? '+' + _.floor(item.day.maxtemp_c) : _.floor(item.day.maxtemp_c)}°</span>
                    <span>{item.day.mintemp_c > 0 ? '+' + _.floor(item.day.mintemp_c) : _.floor(item.day.mintemp_c)}°</span>
                  </div>
                  <img src={item.day.condition.icon} alt={item.day.condition.text} />
                </WeatherCard>
              </div>)
          }
        </>
        }

      </WeatherWeek>
    </WeatherData>
  )

}

export default WeatherBlock;
// export { }