import React from 'react'
import {Motion, spring} from 'react-motion'

export default function AccretionDisk ({expanded, radius}) {
  return <Motion
    defaultStyle={{
      radius: expanded ? radius : 0
    }}
    style={{
      radius: spring(expanded ? radius : 0)
    }}
    >
    {(style) => (
      <g>
        <circle
          r={style.radius}
          fill='#1d094e'
          opacity={0.2}
        />
        <circle
          className='accretion disk-4'
          r={style.radius / 2}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-3'
          r={style.radius / 3}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-2'
          r={style.radius / 6}
          fill='#1d094e'
        />
        <circle
          className='accretion disk-1'
          r={style.radius / 10}
          fill='#1d094e'
          opacity={0.3}
        />
      </g>
    )}
  </Motion>
}
