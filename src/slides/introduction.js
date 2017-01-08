import React from 'react'
import noMansSky from './no-mans-sky.png'
import gameplay from './gameplay.mp4'

export default () => (
  <section>
    <section>
      <h1>universe as a function</h1>
    </section>
    <section data-background-image={noMansSky} />
    <section>
      <h2>"Poor Man's Sky"</h2>
    </section>
    <section data-background-video={gameplay} />
  </section>
)
