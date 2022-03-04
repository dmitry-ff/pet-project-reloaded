import { marksCount } from "./marksCount";
import { marginX, TDataTemperature } from "./CanvasChart";
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
    ctx!.moveTo(stepX * i + marginX + 20, stepY * marksCount(dataTemperatures).length - 20);
    ctx!.lineTo(stepX * i + marginX + 20, 10)
    ctx!.fillStyle = "#7b7d7b";
    if (i < dates.length - 1) {
      ctx!.fillText(`${dates[i]}`, stepX * i + marginX, stepY * marksCount(dataTemperatures).length + 20);
    } else {
      ctx!.fillText(`${dates[i]}`, stepX * i + marginX - 50, stepY * marksCount(dataTemperatures).length + 20);
    }
  }
};
