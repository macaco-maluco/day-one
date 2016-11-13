import React from 'react'

export default function RedGiant ({
  pixelPosition,
  planets
}) {
  return <circle
    cx={pixelPosition[0]}
    cy={pixelPosition[1]}
    r={planets[planets.length - 1].orbit + 5}
    fill='#ff0000'
    style={{filter: 'blur(5px)'}}
  />
}
