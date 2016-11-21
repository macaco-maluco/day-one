import {GAME_OVER_REASONS} from 'constants'

export default ({energy, population}) => {
  if (energy) {
    return {
      type: GAME_OVER_REASONS.ENERGY
    }
  }

  if (population) {
    return {
      type: GAME_OVER_REASONS.POPULATION
    }
  }

  return undefined
}
