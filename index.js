'use strict'

const findDuplicates = require('@pelevesque/find-duplicates')

module.exports = (arr, onlyKeepElementsWithoutDuplicates = false) => {
  const duplicates = findDuplicates(arr)
  const removalStartIndex = onlyKeepElementsWithoutDuplicates ? 0 : 1
  const indices = []
  for (let i = 0, len = duplicates.length; i < len; i++) {
    for (let j = removalStartIndex, len = duplicates[i].length; j < len; j++) {
      indices.push(duplicates[i][j])
    }
  }
  indices.sort((a, b) => b - a) // sort descending
  indices.forEach(v => arr.splice(v, 1))
}
