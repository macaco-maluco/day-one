import { range } from 'ramda'
import { GRID_SIZE } from 'constants'
import { randomNd } from 'random'

const { floor, ceil, abs } = Math

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
      .map((x) => x * GRID_SIZE + GRID_SIZE / 2)

  const addNoise = (dot) => [
    ...(gridToDots(dot)),
    randomNd(dot[0], dot[1], noise)
  ]

  const deviation = (noise, counter) =>
    GRID_SIZE / 2 * abs(randomNd(noise, counter))

  const addDeviation = ([x, y, noise]) => [
    x + deviation(noise, 0),
    y + deviation(noise, 1),
    noise
  ]

  return {
    ...quadrant,
    cells: matrix.map(addNoise).map(addDeviation)
  }
}
