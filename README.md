[![Build Status](https://travis-ci.org/pelevesque/remove-duplicates.svg?branch=master)](https://travis-ci.org/pelevesque/remove-duplicates)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/remove-duplicates/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/remove-duplicates?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# remove-duplicates

Removes and returns duplicates from an array.

## Node Repository

https://www.npmjs.com/package/@pelevesque/remove-duplicates

## Installation

`npm install @pelevesque/remove-duplicates`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

#### Requiring

```js
const removeDuplicates = require('@pelevesque/remove-duplicates')
```

#### Basic

```js
const arr = [
  'd131dd02c5e6eec4', // a
  '55ad340609f4b302',
  'd8823e3156348f5b', // b
  'd131dd02c5e6eec4', // a
  'd8823e3156348f5b', // b
  '551111111114b302', // c
  '551111111114b302'  // c
]
const duplicates = removeDuplicates(arr)
/*
arr = [
  'd131dd02c5e6eec4',
  '55ad340609f4b302',
  'd8823e3156348f5b',
  '551111111114b302'
]
duplicates = [
  'd131dd02c5e6eec4',
  'd8823e3156348f5b',
  '551111111114b302'
]
*/
```

#### OnlyKeepElementsWithoutDuplicates Option

When setting the `onlyKeepElementsWithoutDuplicates` to true, only elements that
have no duplicates are kept.

```js
const arr = [
  'd131dd02c5e6eec4', // a
  '55ad340609f4b302',
  'd8823e3156348f5b', // b
  'd131dd02c5e6eec4', // a
  'd8823e3156348f5b', // b
  '551111111114b302', // c
  '551111111114b302'  // c
]
const opts = { onlyKeepElementsWithoutDuplicates: true }
const duplicates = removeDuplicates(arr, opts)
/*
arr = [
  '55ad340609f4b302'
]
duplicates = [
  'd131dd02c5e6eec4',
  'd8823e3156348f5b',
  'd131dd02c5e6eec4',
  'd8823e3156348f5b',
  '551111111114b302',
  '551111111114b302'
]
*/
```

#### Remove option

With the remove option set to false, duplicates are still returned, but nothing is
removed from the original array.

```js
const arr = [
  'd131dd02c5e6eec4', // a
  '55ad340609f4b302',
  'd8823e3156348f5b', // b
  'd131dd02c5e6eec4', // a
  'd8823e3156348f5b', // b
  '551111111114b302', // c
  '551111111114b302'  // c
]
const opts = { remove: false }
const duplicates = removeDuplicates(arr, opts)
/*
arr = [
  'd131dd02c5e6eec4',
  '55ad340609f4b302',
  'd8823e3156348f5b',
  'd131dd02c5e6eec4',
  'd8823e3156348f5b',
  '551111111114b302',
  '551111111114b302'
]
duplicates = [
  'd131dd02c5e6eec4',
  'd8823e3156348f5b',
  '551111111114b302'
]
*/
```
