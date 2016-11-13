import {DYSON_SWARM_CONSTRUCTION_TIME} from 'constants'

export default (solarSystemId, playerId, now) => ({
  solarSystemId,
  playerId,
  energyLog: [
    [1000, now + DYSON_SWARM_CONSTRUCTION_TIME]
  ]
})
