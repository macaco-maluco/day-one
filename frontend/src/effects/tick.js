export default (dispatch) => {
  setInterval(() => {
    dispatch({
      type: 'TICK',
      payload: Date.now()
    })
  }, 100)

  return (state) => {}
}
