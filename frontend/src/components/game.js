import React from 'react'
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'
import SolarSystem from './solar-system'

function Game ({bigBang, solarSystems, shipPopulation, now, viewport}) {
  // const age = now - bigBang
  // console.log(shipPopulation)
  return (
    <svg width={viewport[0]} height={viewport[1]}>
      {solarSystems.map((solarSystem) => <SolarSystem {...solarSystem} />)}
    </svg>
  )
}

export default connect(getVisibleUniverse)(Game)
