import { TDataTemperature } from "../types/TDataTemperature";
import { dotsDraw } from './dotsDraw';
import { linesDraw } from './drawLines';

type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    ctx: CanvasRenderingContext2D | null,
    stepX: number,
    stepY: number,
    dataTemperatures: TDataTemperature,
    dates: string[]
  ): void;
}
export const chartsDraw: TCanvas = (canvasRef, ctx, stepX, stepY, dataTemperatures, dates) => {
  let k = 0;
  for (let data in dataTemperatures) {
    for (let i = 0; i < dates.length; i++) {
      dotsDraw(canvasRef, ctx, dataTemperatures[data], k, dates, stepX, stepY, dataTemperatures);
      linesDraw(canvasRef, ctx, dataTemperatures[data], k, dates, stepX, stepY, dataTemperatures);
    }
    k++;
  }
};
