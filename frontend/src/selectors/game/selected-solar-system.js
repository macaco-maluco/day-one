import {compose} from 'ramda'
import toSolarSystem from '../solar-system/solar-system'
import translatePlanets from '../solar-system/translate-planets'

export default (state) => {
  const universeAge = state.now - state.bigBang

  const nextState = {
    ...state,
    selectedSolarSystem: state.selectedSolarSystemPosition
      ? compose(
          translatePlanets(universeAge),
          toSolarSystem
        )(state.selectedSolarSystemPosition)
      : undefined
  }
  return nextState
}
