import { colors, DPI_HEIGTH, PADDING, tags, TCanvas } from "./CanvasChart";

export const chartLegend: TCanvas = (canvasRef, ctx) => {
  for (let i = 0; i < colors.length; i++) {
    ctx!.fillStyle = `${colors[i]}`
    ctx!.fillRect(PADDING * 6 * (i + 1) + 80, DPI_HEIGTH - 30, 100, 20);
    ctx!.fillStyle = '#7a7a7a';
    ctx!.fillText(`${tags[i]}`, PADDING * 6 * (i + 1) + 190, DPI_HEIGTH - 13)
  }
}