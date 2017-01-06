import { render } from 'react-dom'
import React from 'react'
import Quadrant from 'components/quadrant'
import generateQuadrant from 'universe/quadrant'
import 'styles.scss'

const noise = 0.2
const size = [window.innerWidth, window.innerHeight]
const coordinates = [0, 0]

const quadrant = generateQuadrant({})(noise, size, coordinates)

render(
  <svg width='100vw' height='100vh' style={{ background: 'black' }}>
    <Quadrant {...quadrant} />
  </svg>
  , document.getElementById('root')
)
