enum SIZES {
  PADDING = 40,
  WIDTH = 640,
  HEIGHT = 320,
  MARGIN_X = 30,
}
const DPI_WIDTH = SIZES.WIDTH * 2;
const DPI_HEIGHT = SIZES.HEIGHT * 2;
const VIEW_HEIGHT = DPI_HEIGHT - SIZES.PADDING * 2;
const COLORS: string[] = ['rgba(1, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(48, 207, 113,1)',];//max,min,avg
const TAGS: string[] = ['Min t, °C', 'Max t, °C', 'Avg t, °C']
const DOT: { start?: number, end?: number } = {
  start: undefined,
  end: undefined,
}

export {
  SIZES,
  DPI_HEIGHT,
  DPI_WIDTH,
  VIEW_HEIGHT,
  COLORS,
  TAGS,
  DOT
}