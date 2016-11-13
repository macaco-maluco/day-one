export default (dispatch) => {
  setInterval(() => {
    dispatch({
      type: 'TICK',
      payload: Date.now()
    })
  }, 50)

  return (state) => {}
}
