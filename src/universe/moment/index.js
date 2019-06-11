import stage from './stage'

export default (quadrant) => (time) => {
  return {
    stages: quadrant.systems.map(({stages}) => stage(stages)(time)),
    translations: quadrant.systems
      .map(({orbits}) => (
        orbits.map(({startTranslation, endTranslation}) => startTranslation + (endTranslation - startTranslation) * time)
      ))
  }
}
