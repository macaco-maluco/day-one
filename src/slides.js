import React from 'react'
import { render } from 'react-dom'
import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
import 'styles.scss'

import System from 'components/system'
import noMansSky from 'slides/no-mans-sky.png'
import gameplay from 'slides/gameplay.mp4'
import RandomChart from 'slides/random-chart'

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

render((
  <div className='slides'>
    <section>
      <h1>Universe as a function</h1>
    </section>
    <section data-background-image={noMansSky}>
    </section>
    <section>
      <h1>"Poor Man's Sky"</h1>
    </section>
    <section data-background-video={gameplay}>
    </section>
    <section>
      <h1>What is procedurally generated</h1>
    </section>

    <section>
      <h1>TODO: Compare procedural or manual level design</h1>
    </section>

    <section>
      <h1>universe = f(seed)</h1>
    </section>

    <section>
      <h1>Math.random()</h1>
    </section>

    <section>
      <h1>What is random?</h1>
    </section>

    <section>
      <h1>Math.random()</h1>
      <RandomChart />
      <RandomChart />
    </section>

    <section>
      <h1>random(seed)</h1>
      <RandomChart seed={0.15} />
      <RandomChart seed={0.15} />
    </section>

    <section>
      <h1>There is no random, there is only very hard to predict sequence of numbers</h1>
    </section>

    <section>
      <h1>TODO: What are pseudo-random functions</h1>
    </section>

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
  </div>
), document.getElementById('root'), () => Reveal.initialize({ history: true }))
