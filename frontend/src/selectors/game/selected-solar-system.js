import {compose, equals} from 'ramda'
import toSolarSystem from '../solar-system/solar-system'
import translatePlanets from '../solar-system/translate-planets'

export default (state) => {
  const universeAge = state.now - state.bigBang

  const nextState = {
    ...state,
    selectedSolarSystem: state.selectedSolarSystemId
      ? compose(
          addDysonSwarmMetadata(state.dysonSwarms),
          addPlanetsMetadata(state.planets),
          translatePlanets(universeAge),
          toSolarSystem
        )(state.selectedSolarSystemId)
      : undefined
  }
  return nextState
}

const addPlanetsMetadata = (planets) => (solarSystem) => ({
  ...solarSystem,
  planets: solarSystem.planets.map((planet, i) => ({
    ...planet,
    ...(planets.find((planet) => equals(planet.solarSystemId, solarSystem.id) && planet.index === i) || {})
  }))
})

const addDysonSwarmMetadata = (dysonSwarms) => (solarSystem) =>
  solarSystem.dysonSwarm
    ? {
      ...solarSystem,
      dysonSwarm: {
        ...solarSystem.dysonSwarm,
        ...(dysonSwarms.find(
          (dysonSwarm) => equals(dysonSwarm.solarSystemId, solarSystem.id)
        ))
      }
    }
    : solarSystem
