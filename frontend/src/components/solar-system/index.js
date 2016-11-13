import React from 'react'
import {SOLAR_SYSTEM_STAGES} from 'constants'
import Star from './star'
import Planets from './planets'

export default function solarSystems ({
  name,
  starType,
  pixelPosition,
  planets,
  lifespan,
  starRadius,
  timeLeft,
  translation,
  onClickStar,
  onClickPlanet,
  stage,
  dysonSwarm
}) {
  return (
    <g
      style={{WebkitTapHighlightColor: 'rgba(0,0,0,0)'}}
      onClick={(e) => { e.stopPropagation(); onClickStar(e) }}>
      <Planets
        pixelPosition={pixelPosition}
        planets={planets}
        onClickPlanet={onClickPlanet}
        stage={stage}
        dysonSwarm={dysonSwarm}
      />
      <Star
        type={starType}
        dysonSwarm={dysonSwarm}
        stage={stage}
        pixelPosition={pixelPosition}
        radius={starRadius}
        rotation={planets[0].translation}
      />
      {stage === SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE && <text
        style={{ fill: '#d2cfff', textTransform: 'uppercase' }}
        opacity={0.5}
        x={pixelPosition[0] + 30}
        y={pixelPosition[1] + (starRadius / 2) - 3}
        >
        {name}
      </text>}
    </g>
  )
}
