import React from 'react'
import System from '../system'

export default function Quadrant ({cells, systems}) {
  return <g>
    {systems.map((system, index) => <g
      transform={`translate(${cells[index][0]}, ${cells[index][1]})`}>
      <System {...system} />
    </g>)}
  </g>
}
