import {compose} from 'ramda'
import getUpdatedPlayers from '../player'
import getUpdatedPlanets from '../planets'
import getSelectedSolarSystem from './selected-solar-system'
import getPlayer from './selected-player'
import getVisibleUniverse from '../visible-universe'

export default compose(
  getSelectedSolarSystem,
  getPlayer,
  getUpdatedPlanets,
  getUpdatedPlayers,
  getVisibleUniverse
)
