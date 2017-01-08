import React, { Component } from 'react'
import {
  CodePane, Deck, Heading, Spectacle, Slide, Image
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import System from 'components/system'
import 'styles.scss'
import noMansSky from './no-mans-sky.png'
import RandomChart from './random-chart'

const theme = createTheme({
}, {
  primary: 'Lato',
  secondary: 'Lato'
})

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

export default class Slides extends Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck>
          <Slide>
            <Heading>Universe as a function</Heading>
          </Slide>
          <Slide>
            <Image src={noMansSky} />
          </Slide>
          <Slide>
            <Heading>"Poor Man's Sky"</Heading>
          </Slide>
          <Slide>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/l-iS5pEy7V8' frameborder='0' allowfullscreen></iframe>
          </Slide>
          <Slide>
            <Heading>What is procedurally generated</Heading>
          </Slide>

          <Slide>
            <Heading>TODO: Compare procedural or manual level design</Heading>
          </Slide>

          <Slide>
            <Heading>universe = f(seed)</Heading>
          </Slide>

          <Slide>
            <Heading>Math.random()</Heading>
          </Slide>

          <Slide>
            <Heading>What is random?</Heading>
          </Slide>

          <Slide>
            <Heading>Math.random()</Heading>
            <RandomChart />
            <RandomChart />
          </Slide>

          <Slide>
            <Heading>random(seed)</Heading>
            <RandomChart seed={0.15} />
            <RandomChart seed={0.15} />
          </Slide>

          <Slide>
            <Heading>There is no random, there is only very hard to predict sequence of numbers</Heading>
          </Slide>

          <Slide>
            <Heading>TODO: What are pseudo-random functions</Heading>
          </Slide>

          <Slide>
            <Heading>What is a star system</Heading>
          </Slide>

          <Slide>
            <CodePane source={systemSource} lang='javascript' />
          </Slide>

          <Slide>
            <CodePane source={'0.187265981274'} lang='javascript' />
          </Slide>

          <Slide>
            <Heading>Star system</Heading>
            <svg
              width='400'
              height='400'
              viewBox={'-200 -200 400 400'}
              style={{ background: '#10052b' }}>>
              <System {...system} stage='Star' translations={[1.2, 3, 7]} />
            </svg>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
