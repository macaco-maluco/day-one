import {compose} from 'ramda'
import getSelectedSolarSystem from './selected-solar-system'
import getPlayer from './selected-player'
import getVisibleUniverse from '../visible-universe'

export default (state) => compose(
  getSelectedSolarSystem,
  getPlayer,
  getVisibleUniverse(state.planets.map((planet) => planet.solarSystemId))
)(state)
