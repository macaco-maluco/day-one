import Alea from 'alea'
import { range } from 'ramda'
import { GRID_SIZE } from 'constants'
import seedableRandom from 'helpers/seedable-random'

const { floor, ceil, abs } = Math

const random = (seed) => {
  const r = new Alea(seed)
  return r()
}

export default (constants) => (quadrant) => {
  const { noise, size, coordinates } = quadrant

  const sizeInGrid = size.map((x) => ceil(x / GRID_SIZE))

  const coordinatesInTheGrid = coordinates
    .map((x) => floor(x / GRID_SIZE))

  const ranges = sizeInGrid.map((value, index) => [
    coordinatesInTheGrid[index],
    coordinatesInTheGrid[index] + value
  ])

  const xRange = range(ranges[0][0], ranges[0][1])

  const yRange = range(ranges[1][0], ranges[1][1])

  const matrix = xRange
    .map((x) => yRange.map((y) => [x, y]))
    .reduce((a, b) => a.concat(b), [])

  const gridToDots = (dot) =>
    dot
      .map((x) => x * GRID_SIZE)

  const deviation = (noise, counter) =>
    GRID_SIZE / 2 * abs(seedableRandom(noise, counter))

  const addNoise = (dot) => [
    ...(gridToDots(dot)),
    random(noise + dot.join('.'))
  ]

  const addDeviation = (cell) => [
    cell[0] + deviation(cell[2], 0),
    cell[1] + deviation(cell[2], 1),
    cell[2]
  ]

  return {
    ...quadrant,
    cells: matrix.map(addNoise).map(addDeviation)
  }
}
