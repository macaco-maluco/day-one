import React from 'react'
import macacoMaluco from './macaco-maluco.mp4'
import mateus from './mateus.jpg'

export default () => (
  <section>
    <section>
      <h2>wrapping up...</h2>
    </section>

    <section>
      <h2>tech stack</h2>
      <ul>
        <li>React</li>
        <li>SVG, lots of SVG</li>
        <li>Redux</li>
        <li>Ramda</li>
        <li>Alea</li>
        <li>Sagui - sagui.js.org</li>
      </ul>
    </section>

    <section data-background-video={macacoMaluco} />

    <section>
      <h2>for Mateus</h2>
      <img src={mateus} style={{ width: '60%' }} />
    </section>

    <section>
      <h2>questions?</h2>
      <h4>https://github.com/macaco-maluco/day-one</h4>
    </section>
  </section>
)
