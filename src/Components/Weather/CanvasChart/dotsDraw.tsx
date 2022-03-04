import _ from "lodash";
import { marksCount } from "./marksCount";
import { colors, marginX, TDataTemperature } from "./CanvasChart";
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
export const dotsDraw: TCanvas = (canvasRef, ctx, dataArr = [], colorIndex = 0, dates, stepX, stepY, dataTemperatures) => {
  ctx!.fillStyle = `${colors[colorIndex]}`;
  for (let i = 0; i < dates.length; i++) {
    ctx!.beginPath();
    const dotY = _.indexOf(marksCount(dataTemperatures), dataArr[i]);
    ctx!.arc(stepX * (i) + marginX + 20, dotY * stepY, 7, 0, Math.PI * 2);
    ctx!.fill();
  }
};
