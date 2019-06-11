export default ({
  fusionDuration,
  redGiantDuration,
  supernovaDuration,
  starLifecycles,
  solarSystemStages
}) => (system) => {
  const {star} = system

  return {
    ...system,
    stages: starLifecycles.find((x) => star.lifespan < x[0])[1]
      .map((stage) => ({ stage }))
      .map(({stage}) => {
        switch (stage) {
          case solarSystemStages.ACCRETION_DISK:
            return {
              stage,
              start: 0
            }

          case solarSystemStages.FUSION_START:
            return {
              stage,
              start: star.birth - fusionDuration
            }

          case solarSystemStages.MAIN_SEQUENCE:
            return {
              stage,
              start: star.birth
            }

          case solarSystemStages.SUPERNOVA:
            return {
              stage,
              start: star.birth + star.lifespan
            }

          case solarSystemStages.RED_GIANT:
            return {
              stage,
              start: star.birth + star.lifespan
            }

          case solarSystemStages.BROWN_DWARF:
            return {
              stage,
              start: star.birth + star.lifespan
            }

          case solarSystemStages.BLACK_HOLE:
            return {
              stage,
              start: star.birth + star.lifespan + supernovaDuration
            }

          case solarSystemStages.NEUTRON_STAR:
            return {
              stage,
              start: star.birth + star.lifespan + supernovaDuration
            }

          case solarSystemStages.WHITE_DWARF:
            return {
              stage,
              start: star.birth + star.lifespan + redGiantDuration
            }
        }
      })
  }
}
