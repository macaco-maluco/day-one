import React from 'react'
import {Motion, spring} from 'react-motion';
import {connect} from 'react-redux'
import getVisibleUniverse from 'selectors/get-visible-universe'
import SolarSystem from './solar-system'
import Player from './player'
import Particles from './particles'
import Hud from './hud'

function Game ({
  cameraPosition,
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
        <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(cameraPosition[0]), y: spring(cameraPosition[1])}}>
          {(style) => (
            <g transform={`translate(${style.x}, ${style.y})`}>
              <Particles viewport={viewport} particleMatrix={particleMatrix} />
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
            </g>
          )}
        </Motion>
        <Player position={viewport.map((v) => v / 2)} />
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
