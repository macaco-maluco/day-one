const CUT_FACTOR = 0.5
const {floor} = Math

export default (universe) => {
  const solarSystems = universe.noiseMatrix
    .filter(([x, y, noise]) => noise > CUT_FACTOR)
    .map(([x, y, noise]) => ({
      position: [x, y],
      noise
    }))
    .map(lifespan)

  return {
    ...universe,
    solarSystems
  }
}

const lifespan = (solarSystem) => ({
  ...solarSystem,
  lifespan: floor(solarSystem.noise * 10000)
})
