import React from 'react'

export default function WhiteDwarf ({pixelPosition}) {
  return <circle
    cx={pixelPosition[0]}
    cy={pixelPosition[1]}
    r={2}
    fill='#ddffff'
  />
}
