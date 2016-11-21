import {equals} from 'ramda'

export default (state) => {
  const nextState = {
    ...state,
    selectedSolarSystem: state.solarSystems.find(
      (solarSystem) => equals(solarSystem.id, state.selectedSolarSystemId)
    )
  }
  return nextState
}
