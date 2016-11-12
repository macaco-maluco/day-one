import SimplexNoise from 'simplex-noise'
import {range} from 'ramda'
const {pow, random, floor, ceil} = Math

const windowSize = [window.innerWidth, window.innerHeight]

const simplex = new SimplexNoise()

const viewport = windowSize.map((x) => ceil(x / 100))

const size = pow(10, 16)

const myPosition = [random(), random()]
  .map((x) => size * x)
  .map(floor)

const myPositionInTheGrid = myPosition
  .map((x) => floor(x / 100))

const ranges = viewport.map((x, i) => [
  myPositionInTheGrid[i] - ceil(x / 2),
  myPositionInTheGrid[i] + ceil(x / 2)
])

const xRange = range(ranges[0][0], ranges[0][1])

const yRange = range(ranges[1][0], ranges[1][1])

const matrix = xRange.map((x) => yRange.map((y) => [x, y])).reduce((a, b) => a.concat(b), [])

const noiseMatrix = matrix.map((dot) => [
  ...dot,
  simplex.noise2D(...dot)
])

console.table(noiseMatrix)
