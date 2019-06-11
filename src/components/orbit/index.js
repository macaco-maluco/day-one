import React from 'react'
import Planet from '../planet'

export default function Orbit ({orbit, planet, translation}) {
  return <g
    style={{transform: `rotate(${translation}rad)`}}>
    <circle
      className={`planet-orbit ${planet.material}`}
      r={orbit.radius}
      fill='none'
      opacity={0.3}
      stroke='#97005d'
      strokeWidth='1'
    />

    <g transform={`translate(${orbit.radius}, 0)`}>
      <Planet {...planet} />
    </g>
  </g>
}
