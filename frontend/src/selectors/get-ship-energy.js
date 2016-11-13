export default (state) => {
  return {
    ...state,
    shipEnery: state.energyLog
      .reduce()
  }
}

const consumeEnergy = (population, moving) => ()
