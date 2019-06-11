import React, { Component } from 'react'
import { range } from 'ramda'
import System from 'components/system'
import html2react from 'html2react'

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
<strong>const { abs, random } = Math</strong>

function generateStarSystem () {
  <strong>const starRadius = random() * 10 + 10
  const planets = abs(random() * 3 + 1)</strong>
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

const codeStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  width: '50%',
  height: 400,
  float: 'left'
}

const demoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  float: 'left'
}

export default () => (
  <section>
    <section>
      <h1>start small</h1>
    </section>
    <section>
      <h2>a star system</h2>
      <div style={codeStyle}>
        <code style={{background: 'black', width: '100%'}}><pre>{systemSource}</pre></code>
      </div>
      <div style={demoStyle}>
        <svg
          width='400'
          height='400'
          viewBox={'-200 -200 400 400'}>
          <System {...system} stage='Star' translations={[0, 0]} />
        </svg>
      </div>
    </section>
    <section>
      <h2>generateStarSystem()</h2>
      <div style={codeStyle}>
        <code style={{background: 'black', width: '100%'}}><pre>{staticSystemSource}</pre></code>
      </div>
      <div style={demoStyle}>
        <svg
          width='400'
          height='400'
          viewBox={'-200 -200 400 400'}>
          <System {...system} stage='Star' translations={[0, 0]} />
        </svg>
      </div>
    </section>
    <section>
      <h2>generateStarSystem()</h2>
      <div
        style={{
          width: '50%',
          height: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          float: 'left'
        }}>
        <code style={{background: 'black', display: 'block', width: '100%'}}><pre>{staticSystemSource}</pre></code>
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
          <System {...system} stage='Star' translations={[0, 0]} />
        </svg>
        <svg
          width='200'
          height='200'
          viewBox={'-125 -125 250 250'}>
          <System {...system} stage='Star' translations={[0, 0]} />
        </svg>
        <svg
          width='200'
          height='200'
          viewBox={'-125 -125 250 250'}>
          <System {...system} stage='Star' translations={[0, 0]} />
        </svg>
        <svg
          width='200'
          height='200'
          viewBox={'-125 -125 250 250'}>
          <System {...system} stage='Star' translations={[0, 0]} />
        </svg>
      </div>
    </section>
    <ForceUpdate />
  </section>
)

class ForceUpdate extends Component {
  startUpdating () {
    setInterval(() => this.forceUpdate(), 2000)
    this.forceUpdate()
  }

  render () {
    return (
      <section>
        <h2>generateStarSystem()</h2>
        <div
          style={{
            width: '50%',
            height: 400,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            float: 'left'
          }}>
          <div style={{ width: '100%' }}>
            <code style={{background: 'black', display: 'block', width: '100%'}}><pre>{html2react(randomSystemSource, {
              strong: (props) => <strong style={{color: '#f67c25'}} {...props} />
            })}</pre></code>

            <button style={{ fontSize: '0.5em', padding: '0.25em 2em', color: 'black', background: 'white' }} onClick={() => this.startUpdating()}>Start update</button>
          </div>

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
            <System {...randomSystem()} stage='Star' translations={[0, 0]} />
          </svg>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem()} stage='Star' translations={[0, 0]} />
          </svg>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem()} stage='Star' translations={[0, 0]} />
          </svg>
          <svg
            width='200'
            height='200'
            viewBox={'-125 -125 250 250'}>
            <System {...randomSystem()} stage='Star' translations={[0, 0]} />
          </svg>
        </div>
      </section>
    )
  }
}
