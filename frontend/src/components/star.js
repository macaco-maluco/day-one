import React from 'react'

export default function ({position, radius, opacity, type}) {
  return <circle
    className={`star ${type}`}
    cx={position[0]}
    cy={position[1]}
    r={radius}
    opacity={opacity}
    stroke='none'
  />
}
