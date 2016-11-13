import SimplexNoise from 'simplex-noise'
import {range} from 'ramda'
import {GRID_SIZE} from 'constants'
import seedableRandom from 'helpers/seedable-random'

const {floor, ceil} = Math

const iterativeSeedableRandom = (seed) => {
  let counter = 0
  return () => {
    return seedableRandom(seed, counter++)
  }
}

export default (seed) => {
  const simplex = new SimplexNoise(iterativeSeedableRandom(seed))

  return (universe) => {
    const { viewport, cameraPositionStart, cameraPosition } = universe
    const viewportInGrid = viewport.map((x) => ceil(x / GRID_SIZE))

    const myPositionInTheGrid = cameraPositionStart
      .map((x, i) => x - cameraPosition[i])
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
