import { compose } from 'ramda'
import noiseMatrix from './noise-matrix'
import noiseParticleMatrix from './noise-particle-matrix'
import getSolarSystems from '../solar-system'
import getUpdatedPlayers from '../player'
import getUpdatedPlanets from '../planets'
import getUpdatedDysonSwarms from '../dyson-swarm'
import { SEED } from 'constants'

export default ids =>
  compose(
    getSolarSystems,
    getUpdatedPlanets,
    getUpdatedPlayers,
    getUpdatedDysonSwarms,
    noiseParticleMatrix(SEED + '654321'),
    noiseMatrix(SEED, ids)
  )
