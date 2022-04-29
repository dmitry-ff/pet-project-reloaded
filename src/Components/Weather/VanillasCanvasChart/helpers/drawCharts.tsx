import { TDataTemperature } from "../../types";
import { drawDots, drawLines } from ".";

type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    ctx: CanvasRenderingContext2D | null,
    stepX: number,
    stepY: number,
    dataTemperatures: TDataTemperature,
    dates: string[]
  ): void;
}
export const drawCharts: TCanvas = (canvasRef, ctx, stepX, stepY, dataTemperatures, dates) => {
  let k = 0;
  for (let data in dataTemperatures) {
    for (let i = 0; i < dates.length; i++) {
      drawDots(canvasRef, ctx, dataTemperatures[data], k, dates, stepX, stepY, dataTemperatures);
      drawLines(canvasRef, ctx, dataTemperatures[data], k, dates, stepX, stepY, dataTemperatures);
    }
    k++;
  }
};
