import { DYSON_SWARM_CONSTRUCTION_TIME, DYSON_SWARM_ENERGY_HARVEST_INCREMENT } from 'constants'

export default (solarSystemId, playerId, now) => ({
  solarSystemId,
  playerId,
  energyLog: [[DYSON_SWARM_ENERGY_HARVEST_INCREMENT, now + DYSON_SWARM_CONSTRUCTION_TIME]]
})
