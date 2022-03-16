import { marksCount } from "../helpers/marksCount";
import { TDataTemperature } from "../types/TDataTemperature";
import { DPI_WIDTH } from '../data/Sizes';
type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
    ctx: CanvasRenderingContext2D | null,
    stepY: number,
    dataTemperature: TDataTemperature,): void
};
export const yAxis: TCanvas = (canvasRef, ctx, stepY, dataTemperature) => {
  const marks = marksCount(dataTemperature);
  if (marks.length > 10 && marks.length % 3 === 0) {
    for (let i = 0; i <= marks.length - 1; i += 3) {
      const y = stepY * (i + 1);
      ctx!.moveTo(50, y);
      ctx!.lineTo(DPI_WIDTH, y);
      ctx!.fillText(`${marks[i + 1]}`, 0, y - 2);
    }
  } else {
    for (let i = 0; i <= marks.length - 2; i += 2) {
      const y = stepY * (i + 1);
      ctx!.moveTo(50, y);
      ctx!.lineTo(DPI_WIDTH, y);
      ctx!.fillText(`${marks[i + 1]}`, 0, y - 2);
    }
  }

};
