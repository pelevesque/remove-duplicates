'use strict'

const findIndexesOfDuplicates = require('@pelevesque/find-indexes-of-duplicates')

module.exports = (arr,
  { onlyKeepElementsWithoutDuplicates = false, remove = true } = {}
) => {
  const indexesOfDuplicates = findIndexesOfDuplicates(arr)
  const removalStartIndex = onlyKeepElementsWithoutDuplicates ? 0 : 1
  const indexesToRemove = []
  for (let i = 0, len = indexesOfDuplicates.length; i < len; i++) {
    for (let j = removalStartIndex, len = indexesOfDuplicates[i].length; j < len; j++) {
      indexesToRemove.push(indexesOfDuplicates[i][j])
    }
  }
  indexesToRemove.sort((a, b) => b - a) // sort descending
  const duplicates = []
  indexesToRemove.forEach(v => {
    duplicates.unshift(arr[v])
    if (remove) arr.splice(v, 1)
  })
  return duplicates
}
