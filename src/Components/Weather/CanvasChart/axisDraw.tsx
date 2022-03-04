import { xAxis } from "./xAxis";
import { yAxis } from "./yAxis";
import { TDataTemperature } from "./CanvasChart";

type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    ctx: CanvasRenderingContext2D | null,
    dates: string[],
    stepX: number,
    stepY: number,
    dataTemperature: TDataTemperature
  ): void
}
export const axisDraw: TCanvas = (canvasRef, ctx, dates, stepX, stepY, dataTemperature) => {
  ctx!.beginPath();
  ctx!.font = 'normal 1.1rem sans-serif';
  ctx!.strokeStyle = '#afb0af';
  xAxis(canvasRef, ctx, dates, stepX, stepY, dataTemperature);
  yAxis(canvasRef, ctx, stepY, dataTemperature);
  ctx!.stroke();
  ctx!.closePath();
};
