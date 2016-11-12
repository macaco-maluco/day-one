import React from 'react'

export default ({ position }) => {
  return (
    <g>
      <rect
        x={position[0] - 5}
        y={position[1] - 5}
        width={10}
        height={10}
        fill='#77de51'
      />
    </g>
  )
}
