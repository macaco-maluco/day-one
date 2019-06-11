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

const start = Date.now() + 1000
const lifespan = 30 * 1000

const solarSystemStages = {
  ACCRETION_DISK: 'Accretion Disk',
  FUSION_START: 'Starting Fusion...',
  MAIN_SEQUENCE: 'Star',
  RED_GIANT: 'Red Giant',
  SUPERNOVA: 'Supernova',
  BLACK_HOLE: 'Black Hole',
  NEUTRON_STAR: 'Neutron Star',
  WHITE_DWARF: 'White Dwarf',
  BROWN_DWARF: 'Brown Dwarf'
}

const starLifecycles = [
  [
    0.1,
    [
      solarSystemStages.ACCRETION_DISK,
      solarSystemStages.FUSION_START,
      solarSystemStages.MAIN_SEQUENCE,
      solarSystemStages.SUPERNOVA,
      solarSystemStages.BLACK_HOLE
    ]
  ],
  [
    0.2,
    [
      solarSystemStages.ACCRETION_DISK,
      solarSystemStages.FUSION_START,
      solarSystemStages.MAIN_SEQUENCE,
      solarSystemStages.SUPERNOVA,
      solarSystemStages.NEUTRON_STAR
    ]
  ],
  [
    0.5,
    [
      solarSystemStages.ACCRETION_DISK,
      solarSystemStages.FUSION_START,
      solarSystemStages.MAIN_SEQUENCE,
      solarSystemStages.RED_GIANT,
      solarSystemStages.WHITE_DWARF
    ]
  ],
  [
    1,
    [
      solarSystemStages.ACCRETION_DISK,
      solarSystemStages.FUSION_START,
      solarSystemStages.MAIN_SEQUENCE,
      solarSystemStages.BROWN_DWARF
    ]
  ]
]

const materials = [
  'water',
  'plutonium',
  'hydrogen',
  'iron',
  'carbon',
  'titanium',
  'phosphorus',
  'sulphur',
  'nickel',
  'vanadium',
  'zircorium',
  'zinc',
  'arsenic',
  'selenium',
  'manganese',
  'chromium',
  'germanium',
  'mercury',
  'tungsten',
  'cadmium',
  'niobium',
  'polonium',
  'tellurium'
]

const constants = {
  fusionDuration: 1000 / lifespan,
  redGiantDuration: 2000 / lifespan,
  supernovaDuration: 1000 / lifespan,
  gravityMaximum: 10,
  gravityMinimum: 0.3,
  gridSize: 350,
  materials,
  nameWordsMinimum: 2,
  nameWordsMaximum: 2,
  orbitStepMaximum: 25,
  orbitStepMinimum: 20,
  orbitSpeedFactor: 3,
  planetRadiusMaximum: 8,
  planetRadiusMinimum: 5,
  populationCapacityMaximum: 52100000,
  populationCapacityMinimum: 11000,
  solarSystemPlanetsMaximum: 4,
  solarSystemPlanetsMinimum: 2,
  solarSystemStages,
  starLifecycles,
  starRadiusMinimum: 5,
  starRadiusMaximum: 30,
  starTypes: {
    M: 'M',
    K: 'K',
    G: 'G',
    F: 'F',
    O: 'O'
  },
  starTypesThresholds: {
    O: 0.2,
    F: 0.4,
    G: 0.6,
    K: 0.8,
    M: 1
  }
}

const quadrant = generateQuadrant(constants)(noise, size, coordinates)
const quadrantMoment = getMoment(quadrant)

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
