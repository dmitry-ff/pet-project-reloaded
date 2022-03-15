import _ from "lodash";
import { marksCount } from "./marksCount";
import { TDataTemperature } from "../types/TDataTemperature";
import { COLORS, DOT } from '../data/initialData'
import { SIZES } from '../data/Sizes'
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
export const linesDraw: TCanvas = (canvasRef, ctx, dataArr = [], colorIndex = 0, dates, stepX, stepY, dataTemperatures) => {
  ctx!.strokeStyle = `${COLORS[colorIndex]}`;
  ctx!.beginPath();
  ctx!.lineWidth = 5;
  for (let i = 0; i < dates.length - 1; i++) {
    DOT.start = _.indexOf(marksCount(dataTemperatures), dataArr[i]);
    DOT.end = _.indexOf(marksCount(dataTemperatures), dataArr[i + 1]);
    ctx!.moveTo(stepX * i + SIZES.MARGIN_X + 20, DOT.start * stepY);
    ctx!.lineTo(stepX * (i + 1) + SIZES.MARGIN_X + 20, DOT.end * stepY);
  }
  ctx!.stroke();
  ctx!.closePath();
};
