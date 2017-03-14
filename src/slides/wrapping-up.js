import React from 'react'
import macacoMaluco from './macaco-maluco.mp4'
import mateus from './mateus.jpg'

export default () => (
  <section>
    <section>
      <h1>wrapping up...</h1>
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
      <ul>
        <li>Paulo Ragonha @pirelenito</li>
        <li>Fernando Via Canel @xaviervia</li>
      </ul>

      <h2 style={{ marginTop: '1em' }}>thanks to:</h2>
      <ul>
        <li>Nikola Pejoski @npejo</li>
        <li>Jonathan Trujillo @jonotrujillo</li>
        <li>Klarna AB</li>
      </ul>
    </section>
  </section>
)
