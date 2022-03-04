import _ from "lodash";
import { marksCount } from "./marksCount";
import { colors, dot, marginX, TDataTemperature } from "./CanvasChart";
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
  ctx!.strokeStyle = `${colors[colorIndex]}`;
  ctx!.beginPath();
  ctx!.lineWidth = 5;
  for (let i = 0; i < dates.length - 1; i++) {
    dot.start = _.indexOf(marksCount(dataTemperatures), dataArr[i]);
    dot.end = _.indexOf(marksCount(dataTemperatures), dataArr[i + 1]);
    ctx!.moveTo(stepX * i + marginX + 20, dot.start * stepY);
    ctx!.lineTo(stepX * (i + 1) + marginX + 20, dot.end * stepY);
  }
  ctx!.stroke();
  ctx!.closePath();
};
