import React from 'react'
import Star from './star'

export default function solarSystems ({
  name,
  starType,
  pixelPosition,
  planets,
  lifespan,
  starRadius,
  timeLeft,
  noise,
  translation,
  onClickStar,
  onClickPlanet
}) {
  return (
    <g
      style={{cursor: 'pointer', WebkitTapHighlightColor: 'rgba(0,0,0,0)'}}
      onClick={(e) => { e.stopPropagation(); onClickStar(e) }}>
      <Star type={starType} position={pixelPosition} radius={starRadius} opacity={timeLeft / lifespan} />
      {planets.map((p, index) => {
        return <g
          key={index}
          onClick={(e) => { e.stopPropagation(); onClickPlanet(index) }}
          style={{
            transform: `rotate(${p.translation}rad)`,
            transformOrigin: `${pixelPosition[0]}px ${pixelPosition[1]}px`,
            transition: 'transform 1s linear'
          }}>
          <circle
            className={`planet-orbit ${p.material}`}
            cx={pixelPosition[0]}
            cy={pixelPosition[1]}
            r={p.orbit}
            fill='none'
            opacity={0.3}
            stroke='#97005d'
            strokeWidth='1'
          />
          <circle
            className={`planet ${p.material}`}
            cx={pixelPosition[0] + p.orbit}
            cy={pixelPosition[1]}
            r={p.radius}
            fill={colors[p.material]}
            stroke='none'
          />
        </g>
      })}
      <text
        style={{ fill: '#d2cfff', textTransform: 'uppercase' }}
        opacity={0.5}
        x={pixelPosition[0] + 30}
        y={pixelPosition[1] + (starRadius / 2) - 3}
        >
        {noise}
      </text>
    </g>
  )
}

const colors = {
  'water': '#3fb9dd',
  'plutonium': '#97005d',
  'hydrogen': '#dcbbaf',
  'iron': '#ffffff',
  'carbon': '#131139',
  'titanium': '#3feeac'
}
