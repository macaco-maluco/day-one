import { range } from 'ramda'
import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from 'recharts'
import random from 'random'

const data = (seed) => range(0, 400)
  // .map((x) => x / 1000)
  .map((x) => ({ x, y: seed ? random(seed + x) : Math.random() }))

export default ({ seed }) => (
  <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
    <XAxis dataKey={'x'} name='stature' unit='cm' />
    <YAxis dataKey={'y'} name='weight' unit='kg' />
    <Scatter name='A school' data={data(seed)} fill='#8884d8' />
    <CartesianGrid />
  </ScatterChart>
)
