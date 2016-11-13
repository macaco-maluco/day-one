export default ({dispatch, getState}) => {
  return () => {
    const state = getState()

    if (state.now > state.heatDeath) {
      dispatch({
        type: 'RESTART'
      })
    }
  }
}
