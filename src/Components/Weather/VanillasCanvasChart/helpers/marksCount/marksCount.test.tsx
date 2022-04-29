import { marksCount } from '..';

const mockObj = {
  minT: [-1, -2, -10, 6],
  maxT: [2, 4, 3, 7],
  avgT: [0, 1, -3, 6],
}
const mockOutput = [8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]


describe('marksCount function', () => {
  it('should return reversed array of numbers', () => {
    expect(marksCount(mockObj)).toStrictEqual(mockOutput)
  })
})