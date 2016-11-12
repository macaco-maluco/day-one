import React from 'react'

export default function solarSystems ({
  pixelPosition,
  planets,
  lifespan,
  starRadius,
  timeLeft
}) {
  return (
    <g>
      <circle
        cx={pixelPosition[0]}
        cy={pixelPosition[1]}
        r={starRadius}
        opacity={timeLeft / lifespan}
        fill='#e90057'
        stroke='none'
      />
      {planets.map((p) => {
        return <g
          style={{
            transform: `rotate(${timeLeft % 360}deg)`,
            transformOrigin: `${pixelPosition[0]}px ${pixelPosition[1]}px`,
            transition: 'transform 1s linear'
          }}>
          <circle
            cx={pixelPosition[0]}
            cy={pixelPosition[1]}
            r={p.orbit}
            fill='none'
            stroke='#97005d'
            strokeWidth='1'
          />
          <circle
            cx={pixelPosition[0] + p.orbit}
            cy={pixelPosition[1]}
            r={p.radius}
            fill='#97005d'
            stroke='none'
          />
        </g>
      })}
    </g>
  )
}
