import React from 'react'

export default function ({radius, type, name}) {
  return <g className={`star ${type}`}>
    <circle
      className={`star-part glow1 ${type}`}
      r={radius + 5}
      stroke='none'
    />
    <circle
      className={`star-part glow2 ${type}`}
      r={radius + 8}
      stroke='none'
    />
    <circle
      className={`star-part center ${type}`}
      r={radius}
      stroke='none'
    />
    <StarMarks radius={radius} />
    <text
      style={{ fill: '#d2cfff', textTransform: 'uppercase' }}
      opacity={0.5}
      x={radius + 10}
      y={(radius / 2) - 3}>
      {name}
    </text>
  </g>
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
