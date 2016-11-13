import React from 'react'

export default ({ position }) => {
  return (
    <rect
      x={position[0] - 5}
      y={position[1] - 5}
      width={10}
      height={10}
      stroke='#77de51'
      fill='transparent'
      opacity={0.5}
    />
  )
}
