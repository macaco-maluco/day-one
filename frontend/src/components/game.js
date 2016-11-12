import React from 'react'
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'
import SolarSystem from './solar-system'

function Game ({bigBang, solarSystems, shipPopulation, now, viewport}) {
  return (
    <svg
      width={viewport[0]}
      height={viewport[1]}
      style={{background: '#10052b'}}>
      {solarSystems.map((solarSystem) => <SolarSystem {...solarSystem} />)}
    </svg>
  )
}

export default connect(getVisibleUniverse)(Game)
