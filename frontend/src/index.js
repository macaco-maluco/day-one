// import React from 'react'
// import {render} from 'react-dom'
import noiseMatrix from 'noise-matrix'
import getMyPosition from 'get-my-position'

const windowSize = [window.innerWidth, window.innerHeight]

const matrix = noiseMatrix('seed')(windowSize, getMyPosition())

const starCutFactor = 0.5

const isStar = (x) => x > starCutFactor

const starredMatrix = matrix.map((x) => [
  ...x,
  isStar(x[2])
])

const amountOfStars = starredMatrix.filter(([_, _1, _2, x]) => x).length

console.table(starredMatrix)
console.log('amount', amountOfStars)
