import React from 'react'
import Introduction from './introduction'
import ProceduralGeneration from './procedural-generation'
import StartSmall from './start-small'
import StarSystem from './star-system'
import ThereIsNoRandom from './there-is-no-random'

export default () => (
  <div className='slides'>
    <Introduction />
    <ProceduralGeneration />
    <StartSmall />
    <ThereIsNoRandom />
    <StarSystem />
  </div>
)
