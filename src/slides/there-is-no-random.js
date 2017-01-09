import React, { Component } from 'react'
import RandomChart from './random-chart'
import System from 'components/system'
import random from 'random'
import { range } from 'ramda'

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

const randomSystemSource = `
import random from 'predictable-random'

const { abs } = Math

function generateStarSystem (seed) {
  const starRadius = random(seed) * 10 + 10
  const planets = abs(random(seed) * 3 + 1)
  return {
    starRadius,
    planets
  }
}
`

export default () => (
  <section>
    <section>
      <h2>controlled randomness</h2>
    </section>

    <section>
      <blockquote>"There is no random, there is only very hard to predict sequences of numbers" - Abraham Lincoln</blockquote>
    </section>

    <section>
      <h2>y = x / 2</h2>
      <RandomChart linear />
    </section>

    <section>
      <h2>y = hardToPredictFunction(x)</h2>
      <RandomChart seed={0.2} />
    </section>

    <section>
      <h2>pseudo-random function</h2>
    </section>

    <section>
      <h2>y = pseudoRandom(x)</h2>
      <table>
        <tr>
          <td><RandomChart seed={0.15} /></td>
          <td><RandomChart seed={0.15} /></td>
        </tr>
      </table>
    </section>

    <section>
      <h2>y = Math.random()</h2>
      <table>
        <tr>
          <td><RandomChart /></td>
          <td><RandomChart /></td>
        </tr>
      </table>
    </section>

    <section>
      <h2>generateStarSystem()</h2>
      <ForceUpdate />
    </section>
  </section>
)

function randomSystem (seed) {
  const planets = Math.abs(random(seed) * 4)

  return {
    star: {
      ...system.star,
      name: `${seed}`,
      radius: random(seed) * 20 + 5
    },
    planets: range(0, planets).map(() => planet),
    orbits: range(0, planets).map(calculateOrbit)
  }
}

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
                <System {...randomSystem(0.26748822191753385)} stage='Star' translations={[0, 0]} />
              </svg>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem(0.15453132770270694)} stage='Star' translations={[0, 0]} />
              </svg>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem(0.3315733539302248)} stage='Star' translations={[0, 0]} />
              </svg>
              <svg
                width='250'
                height='250'
                viewBox={'-125 -125 250 250'}>
                <System {...randomSystem(0.6992415201774085)} stage='Star' translations={[0, 0]} />
              </svg>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
