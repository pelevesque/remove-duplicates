/* global describe, it */
'use strict'

const expect = require('chai').expect
const removeDuplicates = require('../index')

describe('#removeDuplicates()', () => {
  it('should not change an empty array', () => {
    const arr = []
    removeDuplicates(arr)
    const result = JSON.stringify(arr)
    const expected = JSON.stringify(arr)
    expect(result).to.equal(expected)
  })

  it('should not change arrays without duplicates', () => {
    const arr = [1, 2, 3, 4]
    removeDuplicates(arr)
    const result = JSON.stringify(arr)
    const expected = JSON.stringify(arr)
    expect(result).to.equal(expected)
  })

  it('should remove contiguous duplicates', () => {
    const arr = [1, 1, 2, 2, 3, 3, 4, 4]
    removeDuplicates(arr)
    const result = JSON.stringify(arr)
    const expected = JSON.stringify([1, 2, 3, 4])
    expect(result).to.equal(expected)
  })

  it('should remove non-contiguous duplicates', () => {
    const arr = [1, 2, 1, 3, 2, 3, 4, 3, 4]
    removeDuplicates(arr)
    const result = JSON.stringify(arr)
    const expected = JSON.stringify([1, 2, 3, 4])
    expect(result).to.equal(expected)
  })

  it('should remove contiguous and non-contiguous duplicates', () => {
    const arr = [1, 1, 2, 1, 2, 2, 3, 1, 4, 4, 3, 3, 2]
    removeDuplicates(arr)
    const result = JSON.stringify(arr)
    const expected = JSON.stringify([1, 2, 3, 4])
    expect(result).to.equal(expected)
  })

  it('should keep only elements that have no duplicates', () => {
    const arr = [1, 2, 1, 3, 4, 4]
    removeDuplicates(arr, true)
    const result = JSON.stringify(arr)
    const expected = JSON.stringify([2, 3])
    expect(result).to.equal(expected)
  })
})
