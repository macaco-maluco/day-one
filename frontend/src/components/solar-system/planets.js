import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES} from 'constants'

export default function Planets ({stage, pixelPosition, planets, onClickPlanet}) {
  const isMain = stage === SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE ||
    stage === SOLAR_SYSTEM_STAGES.FUSION_START

  if (!isMain) { return false }

  return <Motion
    defaultStyle={{
      opacity: isMain ? 1 : 0
    }}
    style={{
      opacity: spring(isMain ? 1 : 0)
    }}
    >
    {(style) => (
      <g opacity={style.opacity}>
        {
          planets.map((p, index) => {
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
          })
        }
      </g>
    )}
  </Motion>
}

const colors = {
  'water': '#3fb9dd',
  'plutonium': '#97005d',
  'hydrogen': '#dcbbaf',
  'iron': '#ffffff',
  'carbon': '#131139',
  'titanium': '#3feeac'
}
