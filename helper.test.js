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

describe('Take returns a slice of the given array with n elements taken from the beginning.', () => {
  it('Returns a slice of the given array.', () => {
    const array = [1, 2, 3, 4, 5]

    expect(helper.take(array, 2)).toEqual([1, 2])
  })
  it('Returns the first element if n is not provided.', () => {
    const array = [1, 2, 3, 4, 5]

    expect(helper.take(array)).toEqual([1])
  }),
  it('Returns an empty array if n is 0.', () => {
    const array = [1, 2, 3, 4, 5]

    expect(helper.take(array, 0)).toEqual([])
  })
})

describe('Join takes an array and a separator and returns a string of each element separated by separator.', () => {
  it('Returns a string of each element separated by separator.', () => {
    const array = ['a', 'b', 'c']
    const separator = '~'

    expect(helper.join(array, separator)).toBe('a~b~c')
  }),
  it('Returns a string of each element without a separator if no separator has been given.', () => {
    const array = ['a', 'b', 'c']

    expect(helper.join(array)).toBe('abc')
  })
})

describe('Drop takes an array and a number and returns a new array with n elements removed.', () => {
  it('Returns a new array with n elements removed.', () => {
    const array = [1, 2, 3]

    expect(helper.drop(array, 1)).toEqual([2, 3])
  }),
  it('Returns a new array with 1 element removed if n has not been provided.', () => {
    const array = [1, 2, 3]

    expect(helper.drop(array)).toEqual([2, 3])
  })
})

describe('Fill method.', () => {
  it('Fills all elements of array when start and end are not provided.', () => {
    const array = [1, 2, 3]
    const char = 'a'

    expect(helper.fill(array, char)).toEqual(['a', 'a', 'a'])
  })
  it('Fills elements of array with value from start up to, but not including, end when provided.', () => {
    const array = [1, 2, 3]
    const char = 'a'

    expect(helper.fill(array, char, 0, 1)).toEqual(['a', 2, 3])
  })
})

describe('Flatten flattens an array a single level deep.', () => {
  it('Flattens an array a single level deep.', () => {
    const array = [1, [2, [3, [4]], 5]]

    expect(helper.flatten(array)).toEqual([1, 2, [3, [4]], 5])
  }),
  it('Returns null if no array is provided.', () => {
    expect(helper.flatten()).toBe(null)
  })
})

describe('Intersection returns the common element in 2 or more arrays.', () => {
  it('Returns the common elements found within 2 or more arrays.', () => {
    expect(helper.intersection([1, 2], [2, 3])).toEqual([2])
  })
})

describe('fromPairs takes an array of arrays and returns a new object with those key value pairs.', () => {
  it('Returns a new object of key value pairs.', () => {
    const array = [['a', 1], ['b', 2]]

    expect(helper.fromPairs(array)).toEqual({a: 1, b:2})
  })
})
