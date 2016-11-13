import React from 'react'

export default function BrownDwarf ({pixelPosition}) {
  return <circle
    cx={pixelPosition[0]}
    cy={pixelPosition[1]}
    r={10}
    fill='#995500'
  />
}
