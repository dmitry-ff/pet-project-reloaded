import { TCanvas } from '../../types';
import { COLORS, DPI_HEIGHT, SIZES, TAGS } from '../data';

export const chartLegend: TCanvas = (canvasRef, ctx) => {
  for (let i = 0; i < COLORS.length; i++) {
    ctx!.fillStyle = `${COLORS[i]}`
    ctx!.fillRect(SIZES.PADDING * 6 * (i + 1) + 80, DPI_HEIGHT - 30, 100, 20);
    ctx!.fillStyle = '#7a7a7a';
    ctx!.fillText(`${TAGS[i]}`, SIZES.PADDING * 6 * (i + 1) + 190, DPI_HEIGHT - 13)
  }
}