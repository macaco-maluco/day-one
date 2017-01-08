import React from 'react'
import noMansSky from './no-mans-sky.png'
import gameplay from './gameplay.mp4'

export default () => (
  <section>
    <section>
      <h1>Universe as a function</h1>
    </section>
    <section data-background-image={noMansSky} />
    <section>
      <h1>"Poor Man's Sky"</h1>
    </section>
    <section data-background-video={gameplay} />
  </section>
)
