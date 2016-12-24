import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES, STAR_TYPES} from 'constants'

export default function ({position, radius, type, stage, dysonSwarm, rotation}) {
  return <g>
    <AccretionDisk
      position={position}
      radius={radius * 5}
      expanded={stage === SOLAR_SYSTEM_STAGES.ACCRETION_DISK}
    />
    <MainSequence
      position={position}
      radius={getStarRadius(stage, radius)}
      type={getStarType(stage, type)}
      opacity={getStarOpacity(stage)}
      dysonSwarm={dysonSwarm}
      rotation={rotation}
    />
    <DeadStar
      position={position}
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

function DeadStar ({ stage, radius, opacity, position }) {
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
        cx={position[0]}
        cy={position[1]}
        r={style.radius}
        fill={getDeadStarFill(stage)}
        stroke='none'
      />
    )}
  </Motion>
}

function AccretionDisk ({position, expanded, radius}) {
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
          cx={position[0]}
          cy={position[1]}
          r={style.radius}
          fill='#1d094e'
          opacity={0.2}
        />
        <circle
          className='accretion disk-4'
          cx={position[0]}
          cy={position[1]}
          r={style.radius / 2}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-3'
          cx={position[0]}
          cy={position[1]}
          r={style.radius / 3}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-2'
          cx={position[0]}
          cy={position[1]}
          r={style.radius / 6}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-1'
          cx={position[0]}
          cy={position[1]}
          r={style.radius / 10}
          fill='#1d094e'
          opacity={0.3}
        />
      </g>
    )}
  </Motion>
}

function MainSequence ({position, radius, type, opacity, dysonSwarm, rotation}) {
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
          cx={position[0]}
          cy={position[1]}
          r={style.radius + 5}
          stroke='none'
        />
        <circle
          className={`star-part glow2 ${type}`}
          cx={position[0]}
          cy={position[1]}
          r={style.radius + 8}
          stroke='none'
        />
        <circle
          className={`star-part center ${type}`}
          cx={position[0]}
          cy={position[1]}
          r={style.radius}
          stroke='none'
        />
        {dysonSwarm != null && <g>
          {dysonSwarm.currentEnergy > 2000 && <circle
            cx={position[0]}
            cy={position[1]}
            r={style.radius + 22}
            fill='none'
            stroke='#00bbff'
            strokeWidth={Math.min(dysonSwarm.currentEnergy / 2000, 5)}
            strokeDasharray={`2, 4`}
            style={{
              transform: `rotate(${-rotation}rad)`,
              transformOrigin: `${position[0]}px ${position[1]}px`,
              transition: 'transform 1s linear'
            }}
          />}
          <circle
            cx={position[0]}
            cy={position[1]}
            r={style.radius + 20}
            fill='none'
            stroke='#fff'
            strokeWidth={2}
            strokeDasharray={`2, ${style.spacing}`}
          />
        </g>}
        <StarMarks position={position} radius={style.radius} />
      </g>
    )}
  </Motion>
}

function StarMarks ({position, radius}) {
  const size = radius / 3
  return <g className='mark'>
    <circle
      cx={position[0] + size}
      cy={position[1] - size}
      r={size}
      stroke='none'
    />
  </g>
}
