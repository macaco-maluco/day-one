import React from 'react'
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'
import SolarSystem from './solar-system'
import Player from './player'
import Hud from './hud'
import {betweenInteger, betweenFloat} from 'helpers/between'

function Game ({
  onMove,
  onSelectSolarSystem,
  onSelectPlanet,
  onClickPopulate,
  bigBang,
  heatDeath,
  solarSystems,
  shipPopulation,
  now,
  viewport,
  selectedSolarSystem,
  particleMatrix
}) {
  return (
    <div>
      <Hud
        now={now}
        bigBang={bigBang}
        heatDeath={heatDeath}
        shipPopulation={shipPopulation}
        selectedSolarSystem={selectedSolarSystem}
        onClickPopulate={onClickPopulate}
      />
      <svg
        width={viewport[0]}
        height={viewport[1]}
        style={{
          background: '#10052b',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}>
        {particleMatrix.map((particle) => (
          <circle
            key={`${particle.pixelPosition.join('-')}`}
            cx={particle.pixelPosition[0]}
            cy={particle.pixelPosition[1]}
            r={Math.abs(betweenInteger(particle.noise, 1, 4))}
            opacity={Math.abs(betweenFloat(particle.noise, 0.3, 0.6))}
            fill='#5d4f72'
            stroke='none'
          />
        ))}
      </svg>
      <svg
        onClick={(e) => onMove([
          e.pageX - viewport[0] / 2,
          e.pageY - viewport[1] / 2
        ])}
        width={viewport[0]}
        height={viewport[1]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5
        }}>
        <Player position={viewport.map((v) => v / 2)} />
        {solarSystems.map((solarSystem) => <SolarSystem
          onClickStar={() => onSelectSolarSystem([
            ...solarSystem.position,
            solarSystem.noise
          ])}
          onClickPlanet={(planetIndex) => onSelectPlanet([
            ...solarSystem.position,
            solarSystem.noise
          ], planetIndex)}
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
    }),
    onSelectPlanet: (solarSystem, planetIndex) => dispatch({
      type: 'SELECT_PLANET',
      payload: {
        solarSystem,
        planetIndex
      }
    }),
    onClickPopulate: (planetIndex) => dispatch({
      type: 'POPULATE_PLANET',
      payload: planetIndex
    })
  }
}

export default connect(
  getVisibleUniverse,
  mapDispatchToProps
)(Game)
