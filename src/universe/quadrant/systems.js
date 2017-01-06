import generateSystem from '../system'

export default (constants) => (quadrant) => ({
  ...quadrant,
  systems: quadrant.cells.map(([x, y, noise]) => generateSystem(constants)(noise))
})
