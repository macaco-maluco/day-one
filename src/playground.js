import { render } from 'react-dom'
import React from 'react'
import Quadrant from 'components/quadrant'
import generateQuadrant from 'universe/quadrant'
import 'styles.scss'

const scale = 4
const width = window.innerWidth * scale
const height = window.innerHeight * scale

const noise = 0.2
const size = [width, height]
const coordinates = [0, 0]

const quadrant = generateQuadrant({})(noise, size, coordinates)

render(
  <svg width='100vw' height='100vh' viewBox={`0 0 ${width} ${height}`} style={{ background: 'black' }}>
    <Quadrant {...quadrant} />
  </svg>
  , document.getElementById('root')
)
