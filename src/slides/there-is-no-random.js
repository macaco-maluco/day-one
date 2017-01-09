import React from 'react'
import RandomChart from './random-chart'

export default () => (
  <section>
    <section>
      <h2>Math.random()</h2>
    </section>

    <section>
      <h2>What is random?</h2>
    </section>

    <section>
      <h2>Math.random()</h2>
      <RandomChart />
      <RandomChart />
    </section>

    <section>
      <h2>random(seed)</h2>
      <RandomChart seed={0.15} />
      <RandomChart seed={0.15} />
    </section>

    <section>
      <h2>There is no random, there is only very hard to predict sequence of numbers</h2>
    </section>

    <section>
      <h2>TODO: What are pseudo-random functions</h2>
    </section>
  </section>
)
