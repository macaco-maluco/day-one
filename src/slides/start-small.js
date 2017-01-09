import React, { Component } from 'react'
import { range } from 'ramda'
import System from 'components/system'

const systemSource = `
const starSystems = {
  starRadius: 20,
  planets: 2
}
`

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

const staticSystemSource = `
function generateStarSystem () {
  return {
    starRadius: 20,
    planets: 2
  }
}
`

const randomSystemSource = `
const { abs, random } = Math

function generateStarSystem () {
  const starRadius = random() * 10 + 10
  const planets = abs(random() * 3 + 1)
  return {
    starRadius,
    planets
  }
}
`

function randomSystem () {
  const planets = Math.abs(Math.random() * 4)

  return {
    system,
    star: {
      ...system.star,
      radius: Math.random() * 20 + 5
    },
    planets: range(0, planets).map(() => planet),
    orbits: range(0, planets).map(calculateOrbit)
  }
}

export default () => (
  <section>
    <section>
      <h2>start small</h2>
      <code><pre>{systemSource}</pre></code>
      <svg
        width='400'
        height='400'
        viewBox={'-200 -200 400 400'}>
        <System {...system} stage='Star' translations={[0, 0]} />
      </svg>
    </section>
    <section>
      <h2>generateStarSystem()</h2>
      <code><pre>{staticSystemSource}</pre></code>
      <svg
        width='400'
        height='400'
        viewBox={'-200 -200 400 400'}>
        <System {...system} stage='Star' translations={[0, 0]} />
      </svg>
    </section>
    <section>
      <h2>generateStarSystem()</h2>
      <table>
        <tr>
          <td>
            <code><pre>{staticSystemSource}</pre></code>
          </td>
          <td>
            <svg
              width='250'
              height='250'
              viewBox={'-125 -125 250 250'}>
              <System {...system} stage='Star' translations={[0, 0]} />
            </svg>
            <svg
              width='250'
              height='250'
              viewBox={'-125 -125 250 250'}>
              <System {...system} stage='Star' translations={[0, 0]} />
            </svg>
            <svg
              width='250'
              height='250'
              viewBox={'-125 -125 250 250'}>
              <System {...system} stage='Star' translations={[0, 0]} />
            </svg>
            <svg
              width='250'
              height='250'
              viewBox={'-125 -125 250 250'}>
              <System {...system} stage='Star' translations={[0, 0]} />
            </svg>
          </td>
        </tr>
      </table>
    </section>
    <section>
      <h2>generateStarSystem()</h2>
      <ForceUpdate />
    </section>
  </section>
)

class ForceUpdate extends Component {
  render () {
    return (
      <div>
        <table>
          <tr>
            <td>
              <code><pre>{randomSystemSource}</pre></code>
              <button onClick={() => window.location.reload()}>Reload</button>
            </td>
            <td>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem()} stage='Star' translations={[0, 0]} />
              </svg>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem()} stage='Star' translations={[0, 0]} />
              </svg>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem()} stage='Star' translations={[0, 0]} />
              </svg>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem()} stage='Star' translations={[0, 0]} />
              </svg>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
