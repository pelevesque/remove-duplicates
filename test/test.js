/* global describe, it */
'use strict'

const expect = require('chai').expect
const removeDuplicates = require('../index')

describe('#removeDuplicates()', () => {
  it('should not change an empty array', () => {
    const arr = []
    const duplicates = removeDuplicates(arr)
    const expectedArr = []
    const expectedDuplicates = []
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })

  it('should not change arrays without duplicates', () => {
    const arr = [1, 2, 3, 4]
    const duplicates = removeDuplicates(arr)
    const expectedArr = [1, 2, 3, 4]
    const expectedDuplicates = []
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })

  it('should remove contiguous duplicates', () => {
    const arr = [1, 1, 2, 2, 3, 3, 4, 4]
    const duplicates = removeDuplicates(arr)
    const expectedArr = [1, 2, 3, 4]
    const expectedDuplicates = [1, 2, 3, 4]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })

  it('should remove non-contiguous duplicates', () => {
    const arr = [1, 2, 1, 3, 2, 3, 4, 3, 4]
    const duplicates = removeDuplicates(arr)
    const expectedArr = [1, 2, 3, 4]
    const expectedDuplicates = [1, 2, 3, 3, 4]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })

  it('should remove contiguous and non-contiguous duplicates', () => {
    const arr = [1, 1, 2, 1, 2, 2, 3, 1, 4, 4, 3, 3, 2]
    const duplicates = removeDuplicates(arr)
    const expectedArr = [1, 2, 3, 4]
    const expectedDuplicates = [1, 1, 2, 2, 1, 4, 3, 3, 2]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })

  it('should keep only elements that have no duplicates', () => {
    const arr = [1, 2, 1, 3, 4, 4]
    const opts = { onlyKeepElementsWithoutDuplicates: true }
    const duplicates = removeDuplicates(arr, opts)
    const expectedArr = [2, 3]
    const expectedDuplicates = [1, 1, 4, 4]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })

  it('should remove work with the remove option set to false', () => {
    const arr = [1, 1, 2, 1, 2, 2, 3, 1, 4, 4, 3, 3, 2]
    const opts = { remove: false }
    const duplicates = removeDuplicates(arr, opts)
    const expectedArr = [1, 1, 2, 1, 2, 2, 3, 1, 4, 4, 3, 3, 2]
    const expectedDuplicates = [1, 1, 2, 2, 1, 4, 3, 3, 2]
    expect(JSON.stringify(arr)).to.equal(JSON.stringify(expectedArr))
    expect(JSON.stringify(duplicates)).to.equal(JSON.stringify(expectedDuplicates))
  })
})
