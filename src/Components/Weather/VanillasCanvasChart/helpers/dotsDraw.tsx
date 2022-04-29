import { marksCount } from ".";

import { TDataTemperature } from '../../types'
import { COLORS, SIZES } from "../data";
type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    ctx: CanvasRenderingContext2D | null,
    dataArr: number[],
    colorIndex: number,
    dates: string[],
    stepX: number,
    stepY: number,
    dataTemperatures: TDataTemperature
  ): void
}
export const drawDots: TCanvas = (canvasRef, ctx, dataArr = [], colorIndex = 0, dates, stepX, stepY, dataTemperatures) => {

  ctx!.fillStyle = `${COLORS[colorIndex]}`;

  for (let i = 0; i < dates.length; i++) {
    ctx!.beginPath();
    const dotY = marksCount(dataTemperatures).indexOf(dataArr[i]);
    ctx!.arc(stepX * (i) + SIZES.MARGIN_X + 20, dotY * stepY, 7, 0, Math.PI * 2);
    ctx!.fill();
  }
};
