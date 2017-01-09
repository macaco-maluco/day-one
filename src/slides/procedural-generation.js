import React from 'react'

const definitionSource = `
const universe = [
  {
    star: {
      name: 'psoenri',
      lifespan: 0.5341289069037884,
      birth: 0.24737509790977166,
      type: 'G',
      radius: 16
    },
    planets: [
      {
        radius: 6,
        material: 'vanadium',
        gravity: 4.4602402325253925,
        populationCapacity: 22351490
      },
      ...
    ]
  },
  ...
]
`

const rulesSource = `
const universe = generateUniverse(0.127946129873)
`

export default () => (
  <section>
    <section>
      <h2>an infinite universe?</h2>
    </section>

    <section>
      <h2>define everything</h2>
      <code><pre>{definitionSource}</pre></code>
    </section>

    <section>
      <h2>define set of rules</h2>
      <code><pre>{rulesSource}</pre></code>
    </section>
  </section>
)
