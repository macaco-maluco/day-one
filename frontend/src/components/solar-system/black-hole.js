import React from 'react'

export default function BlackHole ({
  pixelPosition
}) {
  return <circle
    cx={pixelPosition[0]}
    cy={pixelPosition[1]}
    r={10}
    fill='black'
    style={{filter: 'blur(5px)'}}
  />
}
