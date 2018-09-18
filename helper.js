const helper = {

  chunk: function(array, size) {
    if (!array || !size) return []
    let chunked = []
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size))
    }
    return chunked
  }

}

module.exports = helper
