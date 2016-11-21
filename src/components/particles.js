import React from 'react'
import {betweenInteger, betweenFloat} from 'helpers/between'

const {abs} = Math

export default function ({viewport, particleMatrix}) {
  return <g>
    {particleMatrix.map((particle) => (
      <circle
        key={`${particle.pixelPosition.join('-')}`}
        cx={particle.pixelPosition[0]}
        cy={particle.pixelPosition[1]}
        r={abs(betweenInteger(particle.noise, 1, 4))}
        opacity={abs(betweenFloat(particle.noise, 0.3, 0.6))}
        fill='#5d4f72'
        stroke='none'
      />
    ))}
  </g>
}
