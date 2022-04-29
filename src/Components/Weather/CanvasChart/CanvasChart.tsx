import React from "react";
import { marksCount, drawAxis, drawCharts, chartLegend, dataTemperatureObj } from "./helpers";
import { SIZES, DPI_WIDTH, DPI_HEIGHT, VIEW_HEIGHT } from './data';
import { MONTH_S } from "../data";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { TData } from "../types/";
import * as Styled from './CanvasChart.styled'

const Chart = (props: { loading: boolean, data: TData[] }): EmotionJSX.Element => {
  const { loading, data } = props;
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;

      canvasRef.current.style.width = SIZES.WIDTH + 'px';
      canvasRef.current.style.height = SIZES.HEIGHT + 'px';
      canvasRef.current.height = DPI_HEIGHT;
      canvasRef.current.width = DPI_WIDTH;
      const dataTemperatures = dataTemperatureObj(data)
      const dates: string[] = data.map(item => {
        return `${MONTH_S[new Date(item.date).getMonth()]}, ${new Date(item.date).getDate()}`
      })
      const stepX: number = DPI_WIDTH / dates.length + 185;
      const stepY: number = VIEW_HEIGHT / marksCount(dataTemperatures).length;//взять из даты

      drawAxis(canvasRef, ctx, dates, stepX, stepY, dataTemperatures);
      drawCharts(canvasRef, ctx, stepX, stepY, dataTemperatures, dates);
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