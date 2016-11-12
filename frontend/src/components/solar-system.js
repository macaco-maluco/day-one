import React from 'react'

export default function solarSystems ({pixelPosition, planets, lifespan, timeLeft}) {
  return (
    <g>
      <circle cx={pixelPosition[0]} cy={pixelPosition[1]} r={5} opacity={timeLeft / lifespan} />
      {planets.map((p) => {
        return <circle
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={p.orbit}
          fill='none'
          stroke='black'
          strokeWidth='1'
        />
      })}
    </g>
  )
}
