import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES} from 'constants'

export default function ({pixelPosition, radius, type, stage}) {
  return <g>
    <MainSequence pixelPosition={pixelPosition} radius={radius} type={type} />
    <AccretionDisk pixelPosition={pixelPosition} radius={radius * 5} expanded={stage === SOLAR_SYSTEM_STAGES.ACCRETION_DISK} />
  </g>
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
      />
    )}
  </Motion>
}

function MainSequence ({pixelPosition, radius, type}) {
  return <g className={`star ${type}`}>
    <circle
      className={`star-part glow1 ${type}`}
      cx={pixelPosition[0]}
      cy={pixelPosition[1]}
      r={radius + 5}
      stroke='none'
    />
    <circle
      className={`star-part glow2 ${type}`}
      cx={pixelPosition[0]}
      cy={pixelPosition[1]}
      r={radius + 8}
      stroke='none'
    />
    <circle
      className={`star-part center ${type}`}
      cx={pixelPosition[0]}
      cy={pixelPosition[1]}
      r={radius}
      stroke='none'
    />
    <StarMarks pixelPosition={pixelPosition} radius={radius} />
  </g>
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
