import stage from './stage'

export default (quadrant) => (time) => {
  return {
    stages: quadrant.systems.map(({stages}) => stage(stages)(time))
  }
}
