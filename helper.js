const helper = {

  chunk: function(array, size) {
    if (!array || !size) return []
    let chunked = []
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size))
    }
    return chunked
  },

  compact: function(array) {
    if (!array) return []
    const compacted = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) compacted.push(array[i])
    }
    return compacted
  },

  concat: function(array, ...values) {
    const concatenated = array.slice(0)
    for(let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'object') {
        for (let j = 0; j < values[i].length; j++) {
          concatenated.push(values[i][j])
        }
      } else concatenated.push(values[i])
    }
    return concatenated
  },

  difference: function(array, ...values) {
    if (values.length < 1) return array
    const compare = array.slice(0)
    const difference = []
    values.forEach(array => {
      array.forEach(item => {
        if (!compare.includes(item)) difference.push(item)
      })
    })
    return difference
  },

  take: function(array, n) {
    if (n === 0) return []
    if (!n) n = 1
    return array.slice(0, n)
  },

  join: function(array, separator) {
    if (!separator) separator = ''
    let result = ''
  	for (let i = 0; i < array.length; i++) {
  		if (i === array.length - 1) result += array[i].toString()
  		else result += array[i].toString() + separator
  	}
  	return result
  },

  drop: function(array, number) {
    if (typeof drop === 'undefined') drop = 1
    return array.slice(drop, array.length)
  },

  fill: function(array, char, start, end) {
    let i
  	typeof start !== 'undefined' ? i = start : i = 0
  	typeof end === 'undefined' ? end = array.length : end = end
  	for(i; i < end; i++) {
  		array[i] = char
  	}
    return array
  },

  flatten: function(array) {
    if (!array) return null
    const flattened = []
  	array.forEach(element => {
  		element.length > 1
  			? element.forEach(element => flattened.push(element))
  			: flattened.push(element)
  	})

  	return flattened
  },

  intersection: function(first, ...values) {
    const arrayGroup = []
    arrayGroup.push(first)
    values.forEach(array => arrayGroup.push(array))

    const intersection =
      arrayGroup.reduce((accumulator, current) =>
      accumulator.filter(val =>
      current.includes(val)))

    return intersection
  },
  
  fromPairs: function(arrays) {
    let object = {}
    arrays.forEach(array => object[array[0]] = array[1])
    return object
  }

}

module.exports = helper
