import React from "react";
import { marksCount } from "./helpers/marksCount";
import { axisDraw } from "./helpers/drawAxis";
import { chartsDraw } from "./helpers/drawCharts";
import { chartLegend } from "./helpers/chartLegend";
import { TLoading } from '../../../Data/Types/TLoading'
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import _ from "lodash";
import { MONTH_S } from "../../../Data/Consts/MONTH_S";
import { TData } from "./types/TData";
import { TDataTemperature } from "./types/TDataTemperature";
import * as Styled from './CanvasChart.styled'
import { SIZES } from './data/Sizes'
const Chart: React.FC<TLoading & TData> = ({ loading, data }): EmotionJSX.Element => {

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  React.useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      canvasRef.current.style.width = SIZES.WIDTH + 'px';
      canvasRef.current.style.height = SIZES.HEIGHT + 'px';
      canvasRef.current.height = SIZES.DPI_HEIGTH;
      canvasRef.current.width = SIZES.DPI_WIDTH;
      const dataTemperatures: TDataTemperature = {
        minT: _.map(data, item => {
          let temp = item.day.mintemp_c;
          return _.floor(temp);
        }),
        maxT: _.map(data, item => {
          return _.floor(item.day.maxtemp_c);
        }),
        avgT: _.map(data, item => {
          return _.floor(item.day.avgtemp_c);
        }),
      }
      const dates: string[] = _.map(data, item => {
        return `${MONTH_S[new Date(item.date).getMonth()]}, ${new Date(item.date).getDate()}`
      })
      const stepX: number = SIZES.DPI_WIDTH / dates.length + 185;
      const stepY: number = SIZES.VIEW_HEIGHT / marksCount(dataTemperatures).length;//взять из даты

      axisDraw(canvasRef, ctx, dates, stepX, stepY, dataTemperatures);
      chartsDraw(canvasRef, ctx, stepX, stepY, dataTemperatures, dates);
      chartLegend(canvasRef, ctx)
    }
  }, [data])
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Canvas ref={canvasRef} ></Styled.Canvas>
      </Styled.Card>
    </Styled.Container >
  )
}

export default Chart