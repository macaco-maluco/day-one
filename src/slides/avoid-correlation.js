import React from 'react'
import random from 'random'
import { range } from 'ramda'
import { LineChart, Line, Legend } from 'recharts'
import System from 'components/system'
import html2react from 'html2react'

const theRange = range(0, 20)

const data = (seed) => theRange
  .map((x) => ({x, radius: random(seed + x) * 20 + 5, planets: Math.abs(random(seed + x + 0) * 4)}))

const uncorrelatedData = (seed) => theRange
  .map((x) => ({x, radius: random(seed + x + 1337) * 20 + 5, planets: Math.abs(random(seed + x + 42) * 4)}))

const Graph = ({ seed, uncorrelated }) => (
  <LineChart width={800} height={400} data={uncorrelated ? uncorrelatedData(seed) : data(seed)} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
    <Legend wrapperStyle={{bottom: -40}} />
    <Line name='radius' dataKey='radius' stroke='#8884d8' />
    <Line name='amount of planets' dataKey='planets' stroke='#f67c25' />
  </LineChart>
)

const planet = {
  noise: 0.4288907456211746,
  radius: 6,
  material: 'water',
  gravity: 4.4602402325253925,
  populationCapacity: 22351490
}

const orbit = {
  startTranslation: 0,
  radius: 60
}

function calculateOrbit (index) {
  return {
    ...orbit,
    radius: index * 20 + 50
  }
}

const system = {
  noise: 0.1,
  star: {
    noise: 0.1,
    name: '',
    lifespan: 0.5341289069037884,
    birth: 0.24737509790977166,
    type: 'F',
    radius: 20
  },
  planets: [
    planet,
    planet
  ],
  orbits: [
    calculateOrbit(0),
    calculateOrbit(1)
  ]
}

const xRange = range(0, 4)
const yRange = range(0, 6)

function randomSystem (seed) {
  const planets = Math.abs(random(seed) * 4)

  return {
    star: {
      ...system.star,
      radius: random(seed) * 20 + 5
    },
    planets: range(0, planets).map(() => planet),
    orbits: range(0, planets).map(calculateOrbit)
  }
}

function uncorrelatedRandomSystem (seed) {
  const planets = Math.abs(random(seed + 42) * 4)

  return {
    star: {
      ...system.star,
      radius: random(seed + 1337) * 20 + 5
    },
    planets: range(0, planets).map(() => planet),
    orbits: range(0, planets).map(calculateOrbit)
  }
}

const getSystems = (generator) => xRange.map((x) => yRange.map((y) => generator((x * 10) + y)))

const correlatedRandomSystemSource = `
import random from 'predictable-random'

const { abs } = Math

function generateStarSystem (<strong>seed</strong>) {
  const starRadius = <strong>random(seed)</strong> * 10 + 10
  const planets = abs(<strong>random(seed)</strong> * 3 + 1)
  return {
    starRadius,
    planets
  }
}
`

const uncorrelatedRandomSystemSource = `
import random from 'predictable-random'

const { abs } = Math

function generateStarSystem (seed) {
  const starRadius = random(seed <strong>+ 1337</strong>) * 10 + 10
  const planets = abs(random(seed <strong>+ 42</strong>) * 3 + 1)
  return {
    starRadius,
    planets
  }
}
`

export default () => (
  <section>
    <section>
      <table>
        {getSystems(randomSystem).map((row) => <tr>
          {row.map((system) => <td>
            <svg
              width='125'
              height='125'
              viewBox={'-125 -125 250 250'}>
              <System {...system} stage='Star' translations={[Math.PI, Math.PI, Math.PI, Math.PI]} />
            </svg>
          </td>)}
        </tr>)}
      </table>
    </section>

    <section>
      <h2>radius and amount of planets</h2>
      <Graph seed={0.6} />
    </section>

    <section>
      <h2>…and this makes sense</h2>
      <code><pre>{html2react(correlatedRandomSystemSource, {
          strong: (props) => <strong style={{color: '#f67c25'}} {...props} />
        })}</pre></code>
    </section>

    <section>
      <h2>we need to decorrelate</h2>
    </section>

    <section>
      <h2>add unique factors to the seed</h2>
      <code><pre>{html2react(uncorrelatedRandomSystemSource, {
          strong: (props) => <strong style={{color: '#f67c25'}} {...props} />
        })}</pre></code>
    </section>

    <section>
      <h2>radius and amount of planets</h2>
      <Graph seed={0.6} uncorrelated />
    </section>

    <section>
      <table>
        {getSystems(uncorrelatedRandomSystem).map((row) => <tr>
          {row.map((system) => <td>
            <svg
              width='125'
              height='125'
              viewBox={'-125 -125 250 250'}>
              <System {...system} stage='Star' translations={[Math.PI, Math.PI, Math.PI, Math.PI]} />
            </svg>
          </td>)}
        </tr>)}
      </table>
    </section>
  </section>
)
