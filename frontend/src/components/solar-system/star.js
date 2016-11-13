import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES, STAR_TYPES} from 'constants'

export default function ({pixelPosition, radius, type, stage, dysonSwarm}) {
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
      dysonSwarm={dysonSwarm}
    />
    <DeadStar
      pixelPosition={pixelPosition}
      radius={getDeadStarRadius(stage)}
      opacity={getDeadStarOpacity(stage)}
      stage={stage}
    />
  </g>
}

function getStarOpacity (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.FUSION_START:
    case SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE:
    case SOLAR_SYSTEM_STAGES.RED_GIANT:
      return 1

    default:
      return 0
  }
}

function getDeadStarOpacity (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return 1

    default:
      return 0
  }
}

function getDeadStarRadius (stage) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
    case SOLAR_SYSTEM_STAGES.BROWN_DWARF:
      return 5

    default:
      return 0
  }
}

function getStarType (stage, type) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.RED_GIANT:
    case SOLAR_SYSTEM_STAGES.WHITE_DWARF:
      return STAR_TYPES.M

    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
    case SOLAR_SYSTEM_STAGES.BLACK_HOLE:
    case SOLAR_SYSTEM_STAGES.NEUTRON_STAR:
      return STAR_TYPES.F

    default:
      return type
  }
}

function getStarRadius (stage, radius) {
  switch (stage) {
    case SOLAR_SYSTEM_STAGES.RED_GIANT:
    case SOLAR_SYSTEM_STAGES.SUPERNOVA:
      return radius * 5

    default:
      return radius
  }
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

function DeadStar ({ stage, radius, opacity, pixelPosition }) {
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
        cx={pixelPosition[0]}
        cy={pixelPosition[1]}
        r={style.radius}
        fill={getDeadStarFill(stage)}
        stroke='none'
      />
    )}
  </Motion>
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
      <g>
        <circle
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius}
          fill='#1d094e'
          opacity={0.2}
        />
        <circle
          className='accretion disk-4'
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius / 2}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-3'
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius / 3}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-2'
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius / 6}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-1'
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius / 10}
          fill='#1d094e'
          opacity={0.3}
        />
      </g>
    )}
  </Motion>
}

function MainSequence ({pixelPosition, radius, type, opacity, dysonSwarm}) {
  return <Motion
    defaultStyle={{
      radius: radius,
      opacity: opacity,
      spacing: dysonSwarm ? 2 : 100
    }}
    style={{
      radius: spring(radius),
      opacity: spring(opacity),
      spacing: spring(dysonSwarm ? 2 : 100, {stiffness: 10, damping: 15})
    }}>
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
        {dysonSwarm != null && <circle
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={style.radius + 20}
          fill='none'
          stroke='#fff'
          strokeWidth={2}
          strokeDasharray={`2, ${style.spacing}`}
        />}
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
