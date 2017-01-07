import React from 'react'
import {Motion, spring} from 'react-motion'

export default function ({radius, type, name, opacity}) {
  return <Motion
    defaultStyle={{
      radius: radius,
      opacity: opacity
    }}
    style={{
      radius: spring(radius),
      opacity: spring(opacity)
    }}>
    {(style) => (
      <g className={`star ${type}`} opacity={style.opacity}>
        <circle
          className={`star-part glow1 ${type}`}
          r={style.radius + 5}
          stroke='none'
        />
        <circle
          className={`star-part glow2 ${type}`}
          r={style.radius + 8}
          stroke='none'
        />
        <circle
          className={`star-part center ${type}`}
          r={style.radius}
          stroke='none'
        />
        <StarMarks radius={style.radius} />
        <text
          style={{ fill: '#d2cfff', textTransform: 'uppercase' }}
          opacity={0.5}
          x={style.radius + 10}
          y={(style.radius / 2) - 3}>
          {name}
        </text>
      </g>
    )}
  </Motion>
}

function StarMarks ({radius}) {
  const size = radius / 3

  return <g className='mark'>
    <circle
      cx={size}
      cy={-size}
      r={size}
      stroke='none'
    />
  </g>
}
