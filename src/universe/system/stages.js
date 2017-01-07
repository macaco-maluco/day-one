import {
  FUSION_DURATION,
  RED_GIANT_DURATION,
  SOLAR_SYSTEM_STAGES,
  STAR_LIFECYCLES,
  SUPERNOVA_DURATION
} from 'constants'

export default (constants) => (system) => {
  const {star} = system

  return {
    ...system,
    stages: STAR_LIFECYCLES.find((x) => star.lifespan < x[0])[1]
      .map((stage) => ({ stage }))
      .map(({stage}) => {
        switch (stage) {
          case SOLAR_SYSTEM_STAGES.ACCRETION_DISK:
            return {
              stage,
              start: 0
            }

          case SOLAR_SYSTEM_STAGES.FUSION_START:
            return {
              stage,
              start: star.birth - FUSION_DURATION
            }

          case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
            return {
              stage,
              start: star.birth
            }

          case SOLAR_SYSTEM_STAGES.SUPERNOVA:
            return {
              stage,
              start: star.birth + star.lifespan
            }

          case SOLAR_SYSTEM_STAGES.RED_GIANT:
            return {
              stage,
              start: star.birth + star.lifespan
            }

          case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
            return {
              stage,
              start: star.birth + star.lifespan
            }

          case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
            return {
              stage,
              start: star.birth + star.lifespan + SUPERNOVA_DURATION
            }

          case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
            return {
              stage,
              start: star.birth + star.lifespan + SUPERNOVA_DURATION
            }

          case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
            return {
              stage,
              start: star.birth + star.lifespan + RED_GIANT_DURATION
            }
        }
      })
  }
}
