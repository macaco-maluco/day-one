import React, { Component } from 'react'
import { compose } from 'ramda'
import {render} from 'react-dom'
import noiseMatrix from 'noise-matrix'
import getMyPosition from 'get-my-position'
import getSolarSystem from 'get-solar-system'
const {floor} = Math

const viewport = [window.innerWidth, window.innerHeight]

const dotToPixels = (universe) => {
  const topLeftDot = universe.viewport
    .map((x) => floor(x / 2))
    .map((x, i) => universe.position[i] - x)

  return {
    ...universe,
    solarSystems: universe.solarSystems.map((solarSystem) => ({
      ...solarSystem,
      pixelPosition: solarSystem.position.map((c, i) => c - topLeftDot[i])
    }))
  }
}

const visibleUniverse = compose(
  dotToPixels,
  getSolarSystem,
  noiseMatrix('seed')
)

class Game extends Component {
  constructor () {
    super()

    this.state = {
      position: getMyPosition()
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        position: this.state.position.map((v) => v + 1)
      })
    }, 10)
  }

  render () {
    const solarSystems = visibleUniverse({
      viewport: viewport,
      position: this.state.position
    }).solarSystems

    return (
      <svg width={viewport[0]} height={viewport[1]}>
        {solarSystems.map(({ pixelPosition }) => <circle
          cx={pixelPosition[0]}
          cy={pixelPosition[1]}
          r={5}
        />)}
      </svg>
    )
  }
}

render(
  <Game />,
  document.getElementById('root')
)

