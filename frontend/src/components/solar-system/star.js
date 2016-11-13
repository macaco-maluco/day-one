import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES, STAR_TYPES} from 'constants'

export default function ({pixelPosition, radius, type, stage}) {
  const isMain = stage !== SOLAR_SYSTEM_STAGES.ACCRETION_DISK

  return <g>
    <AccretionDisk
      pixelPosition={pixelPosition}
      radius={radius * 5}
      expanded={stage === SOLAR_SYSTEM_STAGES.ACCRETION_DISK}
    />
    <MainSequence
      pixelPosition={pixelPosition}
      radius={getStarRadius(stage, radius)}
      type={getStarType(stage, type)}
      opacity={getStarOpacity(stage)}
    />
  </g>
}

function getStarOpacity (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return 1

    default:
      return 0
  }
}

function getStarType (stage, type) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
      return type

    case SOLAR_SYSTEM_STAGES.RED_GIANT:
      return STAR_TYPES.M

    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
      return STAR_TYPES.F

    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
      return 'B'

    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
      return STAR_TYPES.F

    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
      return STAR_TYPES.O

    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return STAR_TYPES.K

    default:
      return type
  }
}

function getStarRadius (stage, radius) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.FUSION_START:
    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
      return radius

    case SOLAR_SYSTEM_STAGES.RED_GIANT:
    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
      return radius * 5

    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
      return 10

    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return 5

    default:
      return 0
  }
}

function AccretionDisk ({pixelPosition, expanded, radius}) {
  return <Motion
    defaultStyle={{
      radius: expanded ? radius : 0
    }}
    style={{
      radius: spring(expanded ? radius : 0)
    }}
    >
    {(style) => (
      <circle
        cx={pixelPosition[0]}
        cy={pixelPosition[1]}
        r={style.radius}
        fill='#5e3734'
        opacity={0.3}
      />
    )}
  </Motion>
}

function MainSequence ({pixelPosition, radius, type, opacity}) {
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
      <g className={`star ${type}`} opacity={style.opacity}>
        <circle
          className={`star-part glow1 ${type}`}
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius + 5}
          stroke='none'
        />
        <circle
          className={`star-part glow2 ${type}`}
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius + 8}
          stroke='none'
        />
        <circle
          className={`star-part center ${type}`}
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius}
          stroke='none'
        />
        <StarMarks pixelPosition={pixelPosition} radius={style.radius} />
      </g>
    )}
  </Motion>
}

function StarMarks ({pixelPosition, radius}) {
  const size = radius / 3
  return <g className='mark'>
    <circle
      cx={pixelPosition[0] + size}
      cy={pixelPosition[1] - size}
      r={size}
      stroke='none'
    />
  </g>
}
