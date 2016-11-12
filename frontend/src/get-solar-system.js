const CUT_FACTOR = 0.5

export default (universe) => {
  const solarSystems = universe.noiseMatrix
    .filter(([x, y, noise]) => noise > CUT_FACTOR)
    .map(([x, y, noise]) => ({
      position: [x, y],
      noise
    }))

  return {
    ...universe,
    solarSystems
  }
}
