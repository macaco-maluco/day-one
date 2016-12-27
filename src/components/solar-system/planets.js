import React from 'react'
import {Motion, spring} from 'react-motion'
import {SOLAR_SYSTEM_STAGES} from 'constants'
import SpaceStation from './space-station'

export default function Planets ({dysonSwarm, stage, position, planets, onClickPlanet}) {
  const isMain = stage === SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE ||
    stage === SOLAR_SYSTEM_STAGES.FUSION_START

  if (!isMain) { return false }

  const exists = isMain && !dysonSwarm

  return <Motion
    defaultStyle={{
      opacity: exists ? 1 : 0
    }}
    style={{
      opacity: spring(exists ? 1 : 0)
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
                transformOrigin: `${position[0]}px ${position[1]}px`,
                transition: 'transform 0.5s linear'
              }}>
              <circle
                className={`planet-orbit ${p.material}`}
                cx={position[0]}
                cy={position[1]}
                r={p.orbit}
                fill='none'
                opacity={0.3}
                stroke='#97005d'
                strokeWidth='1'
              />
              <circle
                className={`planet ${p.material}`}
                cx={position[0] + p.orbit}
                cy={position[1]}
                r={p.radius}
                fill={colors[p.material]}
                stroke='none'
              />
              {
                p.currentPopulation &&
                  <SpaceStation
                    style={{
                      fill: 'white',
                      transform: `translate(${position[0] + p.orbit}px, ${position[1]}px) rotate(${p.translation}rad) scale(0.3)`,
                      transition: 'transform 0.5s linear'
                    }} />
              }
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
  'carbon': '#48467b',
  'titanium': '#3feeac',
  'phosphorus': '#da2223',
  'sulphur': '#410d38',
  'nickel': '#cd8a9b',
  'vanadium': '#DF7B4E',
  'zircorium': '#420088',
  'zinc': '#324D65',
  'arsenic': '#78DE45',
  'selenium': '#FFFEED',
  'manganese': '#BF4800',
  'chromium': '#807070',
  'germanium': '#23133A',
  'mercury': '#5d607e',
  'tungsten': '#0F5E44',
  'cadmium': '#27C7B5',
  'niobium': '#8303F1',
  'polonium': '#ECEA00',
  'tellurium': '#92ADFD'
}
