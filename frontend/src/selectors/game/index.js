import {compose} from 'ramda'
import getUpdatedPlayers from '../player'
import getUpdatedPlanets from '../planets'
import getUpdatedDysonSwarms from '../dyson-swarm'
import getSelectedSolarSystem from './selected-solar-system'
import getPlayer from './selected-player'
import getVisibleUniverse from '../visible-universe'

export default (state) => compose(
  getSelectedSolarSystem,
  getPlayer,
  getUpdatedPlanets,
  getUpdatedPlayers,
  getUpdatedDysonSwarms,
  getVisibleUniverse(state.planets.map((planet) => planet.solarSystemId))
)(state)
