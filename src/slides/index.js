import React from 'react'
import Introduction from './introduction'
import ProceduralGeneration from './procedural-generation'
import StartSmall from './start-small'
import ThereIsNoRandom from './there-is-no-random'
import AvoidCorrelation from './avoid-correlation'

export default () => (
  <div className='slides'>
    <Introduction />
    <ProceduralGeneration />
    <StartSmall />
    <ThereIsNoRandom />
    <AvoidCorrelation />
  </div>
)
