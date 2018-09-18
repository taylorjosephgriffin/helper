const helper = require('./helper.js')

describe('Chunk takes an array and splits it into an array of smaller arrays', () => {
  it('Returns an array of smaller arrays with a length of the given size.', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]

    expect(helper.chunk(array, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
  }),
  it('Returns an empty array if no array or size argument is provided.', () => {
    expect(helper.chunk()).toEqual([])
  })
})
