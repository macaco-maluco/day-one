import React from 'react'
import { range } from 'ramda'
import generateQuadrant from 'universe/quadrant'
import { GRID_SIZE } from 'constants'

const quadrant = generateQuadrant({})(0.15, [800, 600], [0, 0])

export default () => (
  <section>
    <section>
      <h2>I was promised a universe!</h2>
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
            quadrant.cells.map(([x, y]) => <circle cx={x} cy={y} r={5} fill='white' />)
          }
        </g>
        <rect x={60} y={50} width={800} height={600} stroke='#f67c25' fill='none' />
      </svg>

      <h3 className='fragment'>GRID_SIZE = 200</h3>
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
            quadrant.cells.map(([x, y], index) => <circle cx={(index % 4) * GRID_SIZE + GRID_SIZE / 2} cy={Math.floor(index / 4) * GRID_SIZE + GRID_SIZE / 2} r={5} fill='white' />)
          }
        </g>
        <rect x={60} y={50} width={800} height={600} stroke='#f67c25' fill='none' />
      </svg>

      <h3 className='fragment'>GRID_SIZE = 200</h3>
    </section>

    <section>
      <code>starSystems = quadrant(x, y, width, height)</code>
    </section>
  </section>
)
