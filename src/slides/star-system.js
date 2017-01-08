import React from 'react'
import System from 'components/system'

const system = {
  noise: 0.1,
  star: {
    noise: 0.1,
    name: 'psoenri',
    lifespan: 0.5341289069037884,
    birth: 0.24737509790977166,
    type: 'G',
    radius: 16
  },
  planets: [
    {
      noise: 0.4288907456211746,
      radius: 6,
      material: 'vanadium',
      gravity: 4.4602402325253925,
      populationCapacity: 22351490
    },
    {
      noise: 0.6234988542273641,
      radius: 6,
      material: 'manganese',
      gravity: 6.347938886005431,
      populationCapacity: 32488431
    },
    {
      noise: 0.990128728793934,
      radius: 7,
      material: 'tellurium',
      gravity: 9.90424866930116,
      populationCapacity: 51585815
    }
  ],
  orbits: [
    {
      startTranslation: 154,
      radius: 52
    },
    {
      startTranslation: 224,
      radius: 75
    },
    {
      startTranslation: 356,
      radius: 99
    }
  ],
  stages: [
    {
      stage: 'Accretion Disk',
      start: 0
    },
    {
      stage: 'Starting Fusion...',
      start: 0.2445973201319939
    },
    {
      stage: 'Star',
      start: 0.24737509790977166
    },
    {
      stage: 'Brown Dwarf',
      start: 0.7815040048135601
    }
  ]
}

const systemSource = `
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
    {
      radius: 6,
      material: 'manganese',
      gravity: 6.347938886005431,
      populationCapacity: 32488431
    },
    {
      radius: 7,
      material: 'tellurium',
      gravity: 9.90424866930116,
      populationCapacity: 51585815
    }
  ],
  orbits: [
    {
      startTranslation: 154,
      radius: 52
    },
    {
      startTranslation: 224,
      radius: 75
    },
    {
      startTranslation: 356,
      radius: 99
    }
  ],
  stages: [
    {
      stage: 'Accretion Disk',
      start: 0
    },
    {
      stage: 'Starting Fusion...',
      start: 0.2445973201319939
    },
    {
      stage: 'Star',
      start: 0.24737509790977166
    },
    {
      stage: 'Brown Dwarf',
      start: 0.7815040048135601
    }
  ]
}
`

export default () => (
  <section>
    <section>
      <h1>What is a star system</h1>
    </section>

    <section>
      <pre><code>{systemSource}</code></pre>
    </section>

    <section>
      <pre><code>0.187265981274</code></pre>
    </section>

    <section>
      <h1>Star system</h1>
      <svg
        width='400'
        height='400'
        viewBox={'-200 -200 400 400'}
        style={{ background: '#10052b' }}>>
        <System {...system} stage='Star' translations={[1.2, 3, 7]} />
      </svg>
    </section>
  </section>
)
