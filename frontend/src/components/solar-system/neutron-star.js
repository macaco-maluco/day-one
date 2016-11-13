import React from 'react'

export default function NeutronStar ({
  pixelPosition
}) {
  return <circle
    cx={pixelPosition[0]}
    cy={pixelPosition[1]}
    r={10}
    fill='blue'
    style={{filter: 'blur(5px)'}}
  />
}
