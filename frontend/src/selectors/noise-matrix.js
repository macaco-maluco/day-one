import SimplexNoise from 'simplex-noise'
import {range} from 'ramda'
import {GRID_SIZE} from 'constants'

const {floor, ceil} = Math

export default (seed) => {
  const simplex = new SimplexNoise()

  return (universe) => {
    const { viewport, position } = universe
    const viewportInGrid = viewport.map((x) => ceil(x / GRID_SIZE))

    const myPositionInTheGrid = position
      .map((x) => floor(x / GRID_SIZE))

    const ranges = viewportInGrid.map((x, i) => [
      myPositionInTheGrid[i] - ceil(x / 2) - 1,
      myPositionInTheGrid[i] + ceil(x / 2) + 1
    ])

    const xRange = range(ranges[0][0], ranges[0][1])

    const yRange = range(ranges[1][0], ranges[1][1])

    const matrix = xRange.map((x) => yRange.map((y) => [x, y])).reduce((a, b) => a.concat(b), [])

    const gridToDots = (dot) =>
      dot
        .map((x) => x * GRID_SIZE)

    const noiseMatrix = matrix.map((dot) => [
      ...(gridToDots(dot)),
      simplex.noise2D(...dot)
    ])

    return {
      ...universe,
      noiseMatrix
    }
  }
}
