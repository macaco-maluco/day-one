import React from 'react'

export default function ({position, radius, opacity, type, timeLeft}) {
  return <g className={`star ${type}`}>
    <circle
      className={`star-part glow1 ${type}`}
      cx={position[0]}
      cy={position[1]}
      r={radius + 5}
      stroke='none'
    />
    <circle
      className={`star-part glow2 ${type}`}
      cx={position[0]}
      cy={position[1]}
      r={radius + 8}
      stroke='none'
    />
    <circle
      className={`star-part center ${type}`}
      cx={position[0]}
      cy={position[1]}
      r={radius}
      opacity={opacity}
      stroke='none'
    />
    <StarMarks noise={timeLeft} position={position} radius={radius} />
  </g>
}

function StarMarks ({position, timeleft, radius}) {
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
