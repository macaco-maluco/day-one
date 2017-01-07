import { render } from 'react-dom'
import React from 'react'
import Quadrant from 'components/quadrant'
import generateQuadrant from 'universe/quadrant'
import getMoment from 'universe/moment'
import 'styles.scss'

const scale = 1
const width = window.innerWidth * scale
const height = window.innerHeight * scale

const noise = 0.2
const size = [width, height]
const coordinates = [0, 0]

const quadrant = generateQuadrant({})(noise, size, coordinates)
const quadrantMoment = getMoment(quadrant)

const start = Date.now()
const lifespan = 30 * 1000

const update = () => {
  const normalizedNow = (Date.now() - start) / lifespan
  const now = quadrantMoment(normalizedNow)

  render(
    <svg
      width='100vw'
      height='100vh'
      viewBox={`0 0 ${width} ${height}`}
      style={{ background: '#10052b' }}>
      <text cx={10} cy={10}>{normalizedNow}</text>
      <Quadrant {...quadrant} moment={now} />
    </svg>
    , document.getElementById('root')
  )

  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)
