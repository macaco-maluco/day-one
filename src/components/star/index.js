import React from 'react'
import MainSequence from './main-sequence'

export default function ({radius, type, name}) {
  return <g>
    <MainSequence radius={radius} type={type} name={name} />
  </g>
}
