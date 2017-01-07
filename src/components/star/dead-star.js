import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES} from 'constants'

export default function DeadStar ({ stage, radius, opacity, position }) {
  return <Motion
    defaultStyle={{
      radius: radius,
      opacity: opacity
    }}
    style={{
      radius: spring(radius),
      opacity: spring(opacity)
    }}
    >
    {(style) => (
      <circle
        r={style.radius}
        fill={getDeadStarFill(stage)}
        stroke='none'
      />
    )}
  </Motion>
}

function getDeadStarFill (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
      return '#0000'

    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
      return '#155299'

    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
      return '#e7fffa'

    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return '#5e3734'
  }
}
