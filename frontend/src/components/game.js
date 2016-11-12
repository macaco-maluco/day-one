import React from 'react'
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'

function Game ({bigBang, solarSystems, now, viewport}) {
  const age = now - bigBang

  return (
    <svg width={viewport[0]} height={viewport[1]}>
      {solarSystems.map(({ pixelPosition, lifespan }) => <circle
        cx={pixelPosition[0]}
        cy={pixelPosition[1]}
        r={5}
        opacity={(lifespan - age) / lifespan}
      />)}
    </svg>
  )
}

export default connect(getVisibleUniverse)(Game)
