const {floor} = Math

export default (state) => {
  return {
    ...state,
    shipPopulation: floor(state.cache.populationLog[0][0])
  }
}
