import React, { Component } from 'react'
import RandomChart from './random-chart'
import System from 'components/system'
import random from 'random'
import { range } from 'ramda'
import html2react from 'html2react'

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
<strong>import random from 'predictable-random-lib'</strong>

const { abs } = Math

function generateStarSystem (<strong>seed</strong>) {
  const starRadius = random(<strong>seed</strong>) * 10 + 10
  const planets = abs(random(<strong>seed</strong>) * 3 + 1)
  return {
    starRadius,
    planets
  }
}

`

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

export default () => (
  <section>
    <section>
      <h2>controlled randomness</h2>
    </section>

    <section>
      <blockquote style={{fontFamily: 'Lora', fontStyle: 'normal', background: 'transparent', fontSize: '1.2em'}}>
        <span style={{fontStyle: 'italic'}}>
          “There is no random; only very hard to predict sequences of numbers”
        </span> — Abraham Lincoln
      </blockquote>
    </section>

    <section>
      <h2>y = x / 2</h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <RandomChart linear large />
      </div>
    </section>

    <section>
      <h2>y = hardToPredictFunction(x)</h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
        <RandomChart seed={0.2} large />
      </div>
    </section>

    <section>
      <h2>pseudo-random function</h2>
    </section>

    <section>
      <h2>y = pseudoRandom(x)</h2>
      <table>
        <tr>
          <td style={{border: 0}}><RandomChart seed={0.15} /></td>
          <td style={{border: 0}}><RandomChart seed={0.15} /></td>
        </tr>
      </table>
    </section>

    <section>
      <h2>y = Math.random()</h2>
      <table>
        <tr>
          <td style={{border: 0}}><RandomChart /></td>
          <td style={{border: 0}}><RandomChart /></td>
        </tr>
      </table>
    </section>

    <ForceUpdate />
  </section>
)

class ForceUpdate extends Component {
  render () {
    return (
      <section>
        <h2>generateStarSystem(seed)</h2>
        <div
          style={{
            width: '50%',
            height: 400,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            float: 'left'
          }}>
          <code
            style={{
              background: 'black',
              display: 'block',
              width: '100%'
            }}><pre>{html2react(randomSystemSource, {
              strong: (props) => <strong style={{color: '#f67c25'}} {...props} />
            })}</pre></code>
        </div>
        <div
          style={{
            width: '50%',
            float: 'left'
          }}>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem(0.26)} stage='Star' translations={[Math.PI, Math.PI, Math.PI, Math.PI]} />
          </svg>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem(0.69)} stage='Star' translations={[Math.PI, Math.PI, Math.PI, Math.PI]} />
          </svg>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem(0.33)} stage='Star' translations={[Math.PI, Math.PI, Math.PI, Math.PI]} />
          </svg>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem(0.15)} stage='Star' translations={[Math.PI, Math.PI, Math.PI, Math.PI]} />
          </svg>
        </div>
      </section>
    )
  }
}
