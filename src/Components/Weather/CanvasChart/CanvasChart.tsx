import React from "react";
import styled from "@emotion/styled";
import { marksCount } from "./marksCount";
import { axisDraw } from "./axisDraw";
import { chartsDraw } from "./chartsDraw";
import { chartLegend } from "./chartLegend";
import { TLoading } from '../../../Data/Types/TLoading'
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import _ from "lodash";
import { MONTH_S } from "../../../Data/Consts/MONTH_S";

export const PADDING = 40;

const WIDTH: number = 640;
const HEIGHT: number = 320;
export const DPI_WIDTH = WIDTH * 2;
export const DPI_HEIGTH = HEIGHT * 2;
const VIEW_HEIGHT = DPI_HEIGTH - PADDING * 2
const Card = styled.div`
  display:flex;
  justify-content:center;
  border-radius:4px;
  padding:1rem;
  background:#fff;
  transform:scaleX()
`
const Canvas = styled.canvas`
  // border:1px solid black;
`
const Container = styled.div`
  max-width:800px;
  margin:10px auto;
  padding:10px;
`
export type TDataTemperature = {
  [index: string]: number[],
  minT: number[],
  maxT: number[],
  avgT: number[],
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
export type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>, ctx: CanvasRenderingContext2D | null, dataTemperatures?: number[], i?: number): void
};


export const marginX: number = 30;
export const colors: string[] = ['rgba(1, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(48, 207, 113,1)',];//max,min,avg
export const tags: string[] = ['Min t, °C', 'Max t, °C', 'Avg t, °C']
export const dot: { start: number | undefined, end: number | undefined } = {
  start: undefined,
  end: undefined,
}

const Chart: React.FC<TLoading & TData> = ({ loading, data }): EmotionJSX.Element => {

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  React.useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      canvasRef.current.style.width = WIDTH + 'px';
      canvasRef.current.style.height = HEIGHT + 'px';
      canvasRef.current.height = DPI_HEIGTH;
      canvasRef.current.width = DPI_WIDTH;
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
      const stepX: number = DPI_WIDTH / dates.length + 185;
      const stepY: number = VIEW_HEIGHT / marksCount(dataTemperatures).length;//взять из даты

      axisDraw(canvasRef, ctx, dates, stepX, stepY, dataTemperatures);
      chartsDraw(canvasRef, ctx, stepX, stepY, dataTemperatures, dates);
      chartLegend(canvasRef, ctx)
    }
  }, [data])
  return (
    <Container>
      <Card>
        <Canvas ref={canvasRef} ></Canvas>
      </Card>
    </Container >
  )
}

export default Chart