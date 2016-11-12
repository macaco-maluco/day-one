import React from 'react'
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'
import SolarSystem from './solar-system'
import Player from './player'

function Game ({onMove, bigBang, solarSystems, shipPopulation, now, viewport}) {
  return (
    <svg
      onClick={(e) => onMove([
        e.pageX - viewport[0] / 2,
        e.pageY - viewport[1] / 2
      ])}
      width={viewport[0]}
      height={viewport[1]}
      style={{background: '#10052b'}}>
      <Player position={viewport.map((v) => v / 2)} />
      {solarSystems.map((solarSystem) => <SolarSystem
        key={solarSystem.position.join('')}
        {...solarSystem}
      />)}
    </svg>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMove: (delta) => dispatch({
      type: 'MOVE',
      payload: delta
    })
  }
}

export default connect(
  getVisibleUniverse,
  mapDispatchToProps
)(Game)
