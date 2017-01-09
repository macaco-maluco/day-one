import React, { Component } from 'react'
import { range } from 'ramda'
import generateQuadrant from 'universe/quadrant'
import generateSystem from 'universe/system'
import System from 'components/system'
import { GRID_SIZE } from 'constants'
import random, { randomNd } from 'random'

const quadrant = generateQuadrant({})(0.15, [800, 600], [0, 0])

const deviationSource = `
const addDeviation = ([x, y, noise]) => [
  x + GRID_SIZE / 2 * abs(random(noise + 14123)),
  y + GRID_SIZE / 2 * abs(random(noise + 2326)),
  noise
]

const unsnapedSystems = systems.map(addDeviation)
`

export default () => (
  <section>
    <section>
      <h2>I was promised a universe!</h2>
    </section>

    <section>
      <h2>0.8949950667431641</h2>
    </section>

    <section>
      <h2>quadrant</h2>
      <p>x, y, width, height</p>

      <svg
        width='920'
        height='700'>
        <text
          style={{ fill: '#d2cfff' }}
          x={10}
          y={30}>0,0</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={450}
          y={30}>800</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={870}
          y={350}>600</text>

        <g transform='translate(60, 50)'>
          {
            quadrant.cells.map(([x, y]) => <circle cx={x} cy={y} r={5} fill='white' />)
          }
        </g>
        <rect x={60} y={50} width={800} height={600} stroke='#f67c25' fill='none' />
      </svg>

      <h3 className='fragment'>480000 possible stars</h3>

    </section>

    <section>
      <h2>quadrant</h2>
      <p>x, y, width, height</p>

      <svg
        width='920'
        height='700'>
        <text
          style={{ fill: '#d2cfff' }}
          x={10}
          y={30}>0,0</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={450}
          y={30}>800</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={870}
          y={350}>600</text>

        <g className='fragment' data-fragment-index='1' transform='translate(60, 50)'>
          {
            range(0, 800 / GRID_SIZE).map((x) => (
              <line x1={x * GRID_SIZE} y1={0} x2={x * GRID_SIZE} y2={600} stroke='#f67c25' />
            ))
          }
          {
            range(0, 600 / GRID_SIZE).map((y) => (
              <line x1={0} y1={y * GRID_SIZE} x2={800} y2={y * GRID_SIZE} stroke='#f67c25' />
            ))
          }
          <g className='fragment' data-fragment-index='2'>
            {
              quadrant.cells.map(([x, y], index) => <circle cx={(index % 4) * GRID_SIZE + GRID_SIZE / 2} cy={Math.floor(index / 4) * GRID_SIZE + GRID_SIZE / 2} r={5} fill='white' />)
            }
          </g>

          <g className='fragment' data-fragment-index='3'>
            {
              quadrant.cells.map((_, index) => {
                const x = (index % 4) * GRID_SIZE + GRID_SIZE / 2
                const y = Math.floor(index / 4) * GRID_SIZE + GRID_SIZE / 2
                return <text style={{ fontSize: '18px' }} x={x - GRID_SIZE / 2 + 5} y={y - 10} r={5} fill='white'>{randomNd(x, y, random(0.3))}</text>
              })
            }
          </g>
        </g>
        <rect x={60} y={50} width={800} height={600} stroke='#f67c25' fill='none' />
      </svg>

      <h3 className='fragment' data-fragment-index='3'>noise = random(x, y, universeSeed)</h3>
    </section>

    <section>
      <h2>quadrant with systems</h2>

      <svg
        width='920'
        height='700'>
        <text
          style={{ fill: '#d2cfff' }}
          x={10}
          y={30}>0,0</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={450}
          y={30}>800</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={870}
          y={350}>600</text>

        <g transform='translate(60, 50)'>
          {
            range(0, 800 / GRID_SIZE).map((x) => (
              <line x1={x * GRID_SIZE} y1={0} x2={x * GRID_SIZE} y2={600} stroke='#f67c25' />
            ))
          }
          {
            range(0, 600 / GRID_SIZE).map((y) => (
              <line x1={0} y1={y * GRID_SIZE} x2={800} y2={y * GRID_SIZE} stroke='#f67c25' />
            ))
          }
          {
            quadrant.cells.map(([qx, qy, noise], index) => {
              const y = (index % 3) * GRID_SIZE + GRID_SIZE / 2
              const x = Math.floor(index / 3) * GRID_SIZE + GRID_SIZE / 2
              const system = generateSystem({})(noise)

              return <g transform={`translate(${x}, ${y}) scale(0.7)`}>
                <System {...system} stage='Star' translations={system.orbits.map(({ startTranslation }) => startTranslation)} />
              </g>
            })
          }
        </g>
        <rect x={60} y={50} width={800} height={600} stroke='#f67c25' fill='none' />
      </svg>

      <h3>system = generateSystem(noise)</h3>
    </section>

    <section>
      <h3>unsnap from the grid</h3>
      <code><pre>{deviationSource}</pre></code>
    </section>

    <section>
      <h2>quadrant</h2>

      <svg
        width='920'
        height='700'>
        <text
          style={{ fill: '#d2cfff' }}
          x={10}
          y={30}>0,0</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={450}
          y={30}>800</text>

        <text
          style={{ fill: '#d2cfff' }}
          x={870}
          y={350}>600</text>

        <g transform='translate(60, 50)'>
          {
            range(0, 800 / GRID_SIZE).map((x) => (
              <line x1={x * GRID_SIZE} y1={0} x2={x * GRID_SIZE} y2={600} stroke='#f67c25' />
            ))
          }
          {
            range(0, 600 / GRID_SIZE).map((y) => (
              <line x1={0} y1={y * GRID_SIZE} x2={800} y2={y * GRID_SIZE} stroke='#f67c25' />
            ))
          }
          {
            quadrant.cells.map(([x, y, noise]) => {
              const system = generateSystem({})(noise)

              return <g transform={`translate(${x}, ${y}) scale(0.7)`}>
                <System {...system} stage='Star' translations={system.orbits.map(({ startTranslation }) => startTranslation)} />
              </g>
            })
          }
        </g>
        <rect x={60} y={50} width={800} height={600} stroke='#f67c25' fill='none' />
      </svg>
    </section>

    <AutoScrollingUniverse />
  </section>
)

class AutoScrollingUniverse extends Component {
  constructor () {
    super()

    this.state = {
      x: 0,
      y: 0
    }
  }

  startAnimation () {
    const update = () => {
      this.setState({
        x: this.state.x + 1,
        y: this.state.y + 1
      })

      window.requestAnimationFrame(update)
    }

    window.requestAnimationFrame(update)
  }

  render () {
    const quadrant = generateQuadrant({})(0.15, [1200, 1000], [this.state.x - 200, this.state.y - 200])
    const { x, y } = this.state

    return (
      <section onClick={() => this.startAnimation()}>
        <svg
          width='920'
          height='700'
          viewBox={`${this.state.x} ${this.state.y} 920 700`}>
          <text
            style={{ fill: '#d2cfff' }}
            x={10 + x}
            y={30 + y}>{`${x}, ${y}`}</text>

          <text
            style={{ fill: '#d2cfff' }}
            x={450 + x}
            y={30 + y}>800</text>

          <text
            style={{ fill: '#d2cfff' }}
            x={870 + x}
            y={350 + y}>600</text>

          <g transform='translate(60, 50)'>
            {
              quadrant.cells.map(([x, y, noise]) => {
                const system = generateSystem({})(noise)

                return <g key={noise} transform={`translate(${x}, ${y}) scale(0.7)`}>
                  <System {...system} stage='Star' translations={system.orbits.map(({ startTranslation }) => startTranslation)} />
                </g>
              })
            }
          </g>
          <rect x={60 + x} y={50 + y} width={800} height={600} stroke='#f67c25' fill='none' />
        </svg>
      </section>
    )
  }
}
