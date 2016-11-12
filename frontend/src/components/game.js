import React from 'react'
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'
import SolarSystem from './solar-system'
import Player from './player'
import Hud from './hud'

function Game ({
  onMove,
  onSelectSolarSystem,
  bigBang,
  solarSystems,
  shipPopulation,
  now,
  viewport
}) {
  return (
    <div>
      <Hud shipPopulation={shipPopulation} />
      <svg
        onClick={(e) => onMove([
          e.pageX - viewport[0] / 2,
          e.pageY - viewport[1] / 2
        ])}
        width={viewport[0]}
        height={viewport[1]}
        style={{
          background: '#10052b',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}>
        <Player position={viewport.map((v) => v / 2)} />
        {solarSystems.map((solarSystem) => <SolarSystem
          onClick={() => onSelectSolarSystem(solarSystem.position)}
          key={solarSystem.position.join('')}
          {...solarSystem}
        />)}
      </svg>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMove: (delta) => dispatch({
      type: 'MOVE',
      payload: delta
    }),
    onSelectSolarSystem: (solarSystem) => dispatch({
      type: 'SELECT_SOLAR_SYSTEM',
      payload: solarSystem
    })
  }
}

export default connect(
  getVisibleUniverse,
  mapDispatchToProps
)(Game)
