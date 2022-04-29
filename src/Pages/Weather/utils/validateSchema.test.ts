import { validate } from './validateSchema';

const mockEmptyValue = {
  searchField: ''
};
const mockIncorrectValue = {
  searchField: '12312qrasdf'
};
const mockCorrectValue = {
  searchField: 'Paris'
}

describe('Validation schema', () => {
  it('should return `Required` if string is empty', () => {
    expect(validate(mockEmptyValue)).toEqual({ searchField: "Required" })
  })
  it('should return `Incorrect entry` if string isn`t valid', () => {
    expect((mockIncorrectValue).searchField).not.toMatch(/^([a-z\sа-яё]+)$/i)
    expect(validate(mockIncorrectValue)).toEqual({ searchField: "Incorrect Entry" })
  })
})