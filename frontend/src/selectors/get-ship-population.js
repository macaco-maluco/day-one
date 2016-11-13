export default (state) => {
  return {
    ...state,
    shipPopulation: state.cache.populationLog[0][0]
  }
}
