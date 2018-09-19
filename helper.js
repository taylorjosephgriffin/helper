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
  }

}

module.exports = helper
