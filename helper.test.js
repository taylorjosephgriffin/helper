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

describe('Compact takes an array and returns a new array with all falsey values removed.', () => {
  it('Returns an array with all falsey values removed.', () => {
    const array = [1, 2, '', null, 0]

    expect(helper.compact(array)).toEqual([1, 2])
  }),
  it('Returns an empty array if no argument is given.', () => {
    expect(helper.compact()).toEqual([])
  })
})

describe('Concat takes multiple arrays/values and concatenates them into one array.', () => {
  it('Concatenates all provided arguments into one array.', () => {
    expect(helper.concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]])
  })
})

describe('Difference returns given array values not present in original array.', () => {
  it('Returns values not included in original array.', () => {
    const array1 = [1, 2, 3]
    const array2 = [2, 4, 5]

    expect(helper.difference(array1, array2)).toEqual([4, 5])
  }),
  it('Returns the original array if no values are given.', () => {
    const array1 = [1, 2, 3]

    expect(helper.difference(array1)).toEqual([1, 2, 3])
  })
})
