import dysonSwarmEnergy from 'calculators/dyson-swarm-energy'

export default state => {
  if (state.dysonSwarms.length > 0 && state.dysonSwarms[0].energyLog[0][1] < state.now) {
    // debugger
  }
  return {
    ...state,
    dysonSwarms: state.dysonSwarms.map(dysonSwarm => ({
      ...dysonSwarm,

      currentEnergy: dysonSwarmEnergy(dysonSwarm.energyLog)
    }))
  }
}
