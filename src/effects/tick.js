export default ({ dispatch }) => {
  setInterval(() => {
    dispatch({
      type: 'TICK',
      payload: Date.now()
    })
  }, 500)

  return () => {}
}
