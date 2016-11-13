import React from 'react'

export default function Supernova ({
  pixelPosition,
  planets
}) {
  return <circle
    cx={pixelPosition[0]}
    cy={pixelPosition[1]}
    r={planets[planets.length - 1].orbit + 5}
    fill='#ffffff'
    style={{filter: 'blur(5px)'}}
  />
}
