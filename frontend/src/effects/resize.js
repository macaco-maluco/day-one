export default ({dispatch}) => {
  window.addEventListener('resize', () => {
    dispatch({
      type: 'RESIZE_VIEWPORT',
      payload: [window.innerWidth, window.innerHeight]
    })
  })

  return () => {}
}
