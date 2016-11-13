import dysonSwarmEnergy from 'calculators/dyson-swarm-energy'

export default (state) => {
  if (state.dysonSwarms.length > 0) {
    debugger
  }

  return {
    ...state,
    dysonSwarms: state.dysonSwarms.map((dysonSwarm) => ({
      ...dysonSwarm,

      currentEnergy: dysonSwarmEnergy(dysonSwarm.energyLog)
    }))
  }
}
