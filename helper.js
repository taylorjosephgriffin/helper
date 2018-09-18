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
  }

}

module.exports = helper
