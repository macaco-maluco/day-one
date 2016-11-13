export default (dispatch) => {
  setInterval(() => {
    dispatch({
      type: 'TICK',
      payload: Date.now()
    })
  }, 5000)

  return (state) => {}
}
