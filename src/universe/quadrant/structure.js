import { range } from 'ramda'
import random from 'random'

const { floor, ceil, abs } = Math

export default ({gridSize}) => (quadrant) => {
  const { noise, size, coordinates } = quadrant

  const sizeInGrid = size.map((x) => ceil(x / gridSize))

  const coordinatesInTheGrid = coordinates
    .map((x) => floor(x / gridSize))

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
      .map((x) => x * gridSize)

  const deviation = (noise, counter) =>
    gridSize / 2 * abs(random(noise + counter))

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
