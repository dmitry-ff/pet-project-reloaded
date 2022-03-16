import { SIZES, DPI_HEIGHT } from "../data/Sizes";
import { TCanvas } from '../types/Tcanvas';
import { COLORS, TAGS } from '../data/initialData';

export const chartLegend: TCanvas = (canvasRef, ctx) => {
  for (let i = 0; i < COLORS.length; i++) {
    ctx!.fillStyle = `${COLORS[i]}`
    ctx!.fillRect(SIZES.PADDING * 6 * (i + 1) + 80, DPI_HEIGHT - 30, 100, 20);
    ctx!.fillStyle = '#7a7a7a';
    ctx!.fillText(`${TAGS[i]}`, SIZES.PADDING * 6 * (i + 1) + 190, DPI_HEIGHT - 13)
  }
}