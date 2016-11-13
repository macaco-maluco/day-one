import toSolarSystem from '../solar-system'

export default (state) => {
  const nextState = {
    ...state,
    selectedSolarSystem: state.selectedSolarSystemPosition
      ? toSolarSystem(state.now - state.bigBang)(state.selectedSolarSystemPosition)
      : undefined
  }
  return nextState
}
