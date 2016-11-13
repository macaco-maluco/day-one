import {compose} from 'ramda'
import noiseMatrix from './noise-matrix'
import noiseParticleMatrix from './noise-particle-matrix'
import getSolarSystems from '../solar-system'
import getUpdatedPlayers from '../player'
import getUpdatedPlanets from '../planets'
import getUpdatedDysonSwarms from '../dyson-swarm'
import seedableRandom from 'helpers/seedable-random'
import {SEED} from 'constants'

const {floor, abs} = Math

const deviation = (noise, counter) => (
  50 * abs(seedableRandom(noise, counter))
)

const addParticleDeviation = (position, noise) => (
  position.map((x, i) => x + deviation(noise, i + 1))
)

const dotToPixels = (universe) => {
  const topLeftDot = universe.viewport
    .map((x) => floor(x / 2))
    .map((x, i) => universe.cameraPositionStart[i] - x)

  return {
    ...universe,
    solarSystems: universe.solarSystems.map((solarSystem) => ({
      ...solarSystem,
      pixelPosition: solarSystem.position.map((c, i) => c - topLeftDot[i])
    })),
    players: universe.players.map((player) => ({
      ...player,
      pixelPosition: player.position.map((c, i) => c - topLeftDot[i])
    })),
    particleMatrix: universe.particleMatrix.map((particle, i) => {
      return {
        position: [particle[0], particle[1]],
        noise: particle[2],
        pixelPosition: addParticleDeviation([(particle[0] - topLeftDot[0]), (particle[1] - topLeftDot[1])], particle[2])
      }
    })
  }
}

export default (ids) => compose(
  dotToPixels,
  getSolarSystems,
  getUpdatedPlanets,
  getUpdatedPlayers,
  getUpdatedDysonSwarms,
  noiseParticleMatrix(SEED + '654321'),
  noiseMatrix(SEED, ids)
)
