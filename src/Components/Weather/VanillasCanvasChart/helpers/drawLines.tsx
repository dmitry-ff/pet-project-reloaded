import { marksCount } from ".";
import { TDataTemperature } from "../../types";
import { COLORS, DOT, SIZES } from "../data";


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

export const drawLines: TCanvas = (canvasRef, ctx, dataArr = [], colorIndex = 0, dates, stepX, stepY, dataTemperatures) => {
  if (ctx) {
    ctx.strokeStyle = `${COLORS[colorIndex]}`;
    ctx.beginPath();
    ctx.lineWidth = 5;
    for (let i = 0; i < dates.length - 1; i++) {
      DOT.start = marksCount(dataTemperatures).indexOf(dataArr[i]);
      DOT.end = marksCount(dataTemperatures).indexOf(dataArr[i + 1]);
      ctx.moveTo(stepX * i + SIZES.MARGIN_X + 20, DOT.start * stepY);
      ctx.lineTo(stepX * (i + 1) + SIZES.MARGIN_X + 20, DOT.end * stepY);
    }
    ctx.stroke();
    ctx.closePath();
  }
};
