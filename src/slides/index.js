import React from 'react'
import Introduction from './introduction'
import ProceduralGeneration from './procedural-generation'
import StartSmall from './start-small'
import StarSystem from './star-system'

export default () => (
  <div className='slides'>
    <Introduction />
    <ProceduralGeneration />
    <StartSmall />
    <StarSystem />
  </div>
)
