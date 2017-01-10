import React from 'react'
import noMansSky from './no-mans-sky.png'
import gameplay from './gameplay.mp4'

export default () => (
  <section>
    <section>
      <h1>universe as a function</h1>
    </section>
    <section>
      <h1>disclaimer</h1>
      <p>this talk will contain graphs</p>
    </section>
    <section data-background-image={noMansSky} />
    <section>
      <h1>"Poor Man’s Sky"</h1>
    </section>
    <section data-background-video={gameplay} />
    <section>
      <h2>the mob</h2>

      <ul>
        <li>Fernando Via Canel @xaviervia</li>
        <li>Nikola Pejoski @npejo</li>
        <li>Paulo Ragonha @pirelenito</li>
        <li>Túlio Ornelas @tulios</li>
      </ul>
    </section>
  </section>
)
