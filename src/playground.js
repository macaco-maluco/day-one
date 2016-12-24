import { render } from 'react-dom'
import React from 'react'
import SolarSystem from 'components/solar-system'
import fixture from './playground.fixture.json'
import solarSystem from 'selectors/solar-system/solar-system'
import 'styles.scss'

const system = solarSystem([0, 0, 0.45])
const systemWithPosition = {
  ...system,
  planets: system.planets.map((planet) => ({...planet, translation: 5})),
  stage: 'Star',
  pixelPosition: [400, 200]
}

render(
  <svg width='100vw' height='100vh' style={{ background: 'black' }}>
    <SolarSystem {...fixture} />
    <SolarSystem {...systemWithPosition} />
  </svg>
  , document.getElementById('root')
)
