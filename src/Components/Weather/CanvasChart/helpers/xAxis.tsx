import { marksCount } from "../helpers/marksCount";
import { SIZES } from "../data/Sizes";
import { TDataTemperature } from '../types/TDataTemperature'
type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    ctx: CanvasRenderingContext2D | null,
    dates: string[],
    stepX: number,
    stepY: number,
    dataTemperatures: TDataTemperature,
  ): void
};
export const xAxis: TCanvas = (canvasRef, ctx, dates, stepX, stepY, dataTemperatures) => {
  for (let i = 0; i < dates.length; i++) {
    ctx!.font = 'normal 28px sans-serif';
    ctx!.lineWidth = 1;
    ctx!.moveTo(stepX * i + SIZES.MARGIN_X + 20, stepY * marksCount(dataTemperatures).length - 20);
    ctx!.lineTo(stepX * i + SIZES.MARGIN_X + 20, 10)
    ctx!.fillStyle = "#7b7d7b";
    if (i < dates.length - 1) {
      ctx!.fillText(`${dates[i]}`, stepX * i + SIZES.MARGIN_X, stepY * marksCount(dataTemperatures).length + 20);
    } else {
      ctx!.fillText(`${dates[i]}`, stepX * i + SIZES.MARGIN_X - 50, stepY * marksCount(dataTemperatures).length + 20);
    }
  }
};
