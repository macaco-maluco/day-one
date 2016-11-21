import {equals} from 'ramda'

export default (state, planetIndex) =>
  state.planets
    .find(
      (planet) => equals(planet.solarSystemId, state.selectedSolarSystemId) &&
        planetIndex === planet.index
    )
