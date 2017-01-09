import React from 'react'
import Introduction from './introduction'
import ProceduralGeneration from './procedural-generation'
import StartSmall from './start-small'
import ThereIsNoRandom from './there-is-no-random'
import AvoidCorrelation from './avoid-correlation'
import TheUniverse from './the-universe'
import WrappingUp from './wrapping-up'

export default () => (
  <div className='slides'>
    <Introduction />
    <ProceduralGeneration />
    <StartSmall />
    <ThereIsNoRandom />
    <AvoidCorrelation />
    <TheUniverse />
    <WrappingUp />
  </div>
)
