import React from 'react'
import RandomChart from './random-chart'

export default () => (
  <section>
    <section>
      <h1>What is procedurally generated</h1>
    </section>

    <section>
      <h1>TODO: Compare procedural or manual level design</h1>
    </section>

    <section>
      <h1>universe = f(seed)</h1>
    </section>

    <section>
      <h1>Math.random()</h1>
    </section>

    <section>
      <h1>What is random?</h1>
    </section>

    <section>
      <h1>Math.random()</h1>
      <RandomChart />
      <RandomChart />
    </section>

    <section>
      <h1>random(seed)</h1>
      <RandomChart seed={0.15} />
      <RandomChart seed={0.15} />
    </section>

    <section>
      <h1>There is no random, there is only very hard to predict sequence of numbers</h1>
    </section>

    <section>
      <h1>TODO: What are pseudo-random functions</h1>
    </section>
  </section>
)
