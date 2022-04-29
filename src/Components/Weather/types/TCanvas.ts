export type TCanvas = {
  (canvasRef: React.MutableRefObject<HTMLCanvasElement | null>, ctx: CanvasRenderingContext2D | null, dataTemperatures?: number[], i?: number): void
};