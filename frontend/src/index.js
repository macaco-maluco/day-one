import noiseMatrix from 'noise-matrix'
import getMyPosition from 'get-my-position'

const windowSize = [window.innerWidth, window.innerHeight]

const matrix = noiseMatrix('seed')(windowSize, getMyPosition())

console.table(matrix)
