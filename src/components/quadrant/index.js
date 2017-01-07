import React from 'react'
import System from '../system'

export default function Quadrant ({cells, systems, moment}) {
  return <g>
    {systems.map((system, index) => <g
      transform={`translate(${cells[index][0]}, ${cells[index][1]})`}>
      <System {...system} stage={moment.stages[index]} />
    </g>)}
  </g>
}
