import React from 'react'
import Orbit from '../orbit'
import Star from '../star'

export default function System ({star, planets, orbits}) {
  return <g>
    <Star {...star} />
    {orbits.map((orbit, index) => <Orbit
      orbit={orbit}
      planet={planets[index]}
    />)}
  </g>
}
