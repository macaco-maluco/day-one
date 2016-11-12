import React, { Component } from 'react'
import {render} from 'react-dom'
import noiseMatrix from 'noise-matrix'
import getMyPosition from 'get-my-position'

const windowSize = [window.innerWidth, window.innerHeight]

const matrixDoer = noiseMatrix('seed')

const starCutFactor = 0.5

const isStar = (x) => x > starCutFactor

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
    const starredMatrix = matrixDoer(windowSize, this.state.position).map((x) => [
      ...x,
      isStar(x[2])
    ]).filter(([_, _1, _2, x]) => x)

    return (
      <svg width={windowSize[0]} height={windowSize[1]}>
        {starredMatrix.map(([x, y, noise]) => <circle
          cx={x}
          cy={y}
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
