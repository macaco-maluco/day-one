import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'
import {connect} from 'react-redux'
import getGame from 'selectors/game'
import SolarSystem from './solar-system/index'
import Player from './player'
import TargetMarker from './target-marker'
import Particles from './particles'
import Intro from './intro'
import Hud from './hud'

import {POPULATION_ONBOARD_SIZE} from 'constants'

function Game (props) {
  const {
    cameraPosition,
    onMove,
    onSelectSolarSystem,
    onSelectPlanet,
    solarSystems,
    viewport,
    particleMatrix,
    pixelPosition,
    otherPlayers,
    introDiscarded,
    showIntro,
    onCloseIntro,
    onDiscardIntro,
    introAlreadySeen
  } = props

  if (!introDiscarded && showIntro) return <Intro alreadySeen={introAlreadySeen} onDiscard={onDiscardIntro} onClose={onCloseIntro} />

  return (
    <div>
      <Hud {...props} />
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
        <Motion
          defaultStyle={{
            x: cameraPosition[0],
            y: cameraPosition[1],
            playerX: pixelPosition[0],
            playerY: pixelPosition[1]
          }}
          style={{
            x: spring(cameraPosition[0]),
            y: spring(cameraPosition[1]),
            playerX: spring(pixelPosition[0], { stiffness: 111, damping: 33 }),
            playerY: spring(pixelPosition[1], { stiffness: 111, damping: 33 })
          }}
          >
          {(style) => (
            <g transform={`translate(${style.x}, ${style.y})`}>
              <Content
                viewport={viewport}
                particleMatrix={particleMatrix}
                solarSystems={solarSystems}
                onSelectSolarSystem={onSelectSolarSystem}
                onSelectPlanet={onSelectPlanet}
                otherPlayers={otherPlayers}
                pixelPosition={pixelPosition}
              />
              <Player position={[style.playerX, style.playerY]} />
            </g>
          )}
        </Motion>
      </svg>
    </div>
  )
}

/**
 * Rendering this can be very costly
 * And we don't want to do on every
 * translate animation from React Motion
 *
 * This optimizes to render only when necessary
 */
class Content extends Component {
  shouldComponentUpdate (nextProps) {
    return (
      this.props.viewport !== nextProps.viewport ||
      this.props.particleMatrix !== nextProps.particleMatrix ||
      this.props.solarSystems !== nextProps.solarSystems ||
      this.props.otherPlayers !== nextProps.otherPlayers ||
      this.props.pixelPosition !== nextProps.pixelPosition
    )
  }

  render () {
    const {viewport, particleMatrix, solarSystems, onSelectSolarSystem, onSelectPlanet, otherPlayers, pixelPosition} = this.props

    return (
      <g>
        <Particles viewport={viewport} particleMatrix={particleMatrix} />
        {solarSystems.map((solarSystem) => <SolarSystem
          onClickStar={() => onSelectSolarSystem(solarSystem.id)}
          onClickPlanet={(planetIndex) => onSelectPlanet(solarSystem.id, planetIndex)}
          key={solarSystem.position.join('')}
          {...solarSystem}
        />)}
        {otherPlayers.map((player) => <Player position={player.pixelPosition} />)}
        <TargetMarker position={pixelPosition} />
      </g>
    )
  }
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
      payload: {
        index: planetIndex,
        population: POPULATION_ONBOARD_SIZE
      }
    }),
    onClickOnboard: (planetIndex) => dispatch({
      type: 'ONBOARD_SHIP',
      payload: {
        index: planetIndex,
        population: POPULATION_ONBOARD_SIZE
      }
    }),
    onCloseIntro: () => {
      window.localStorage.setItem('dayOne.introAlreadySeen', 1)
      return dispatch({
        type: 'CLOSE_INTRO',
        payload: {
          showIntro: false,
          introAlreadySeen: true
        }
      })
    },
    onDiscardIntro: () => {
      window.localStorage.setItem('dayOne.introDiscarded', 1)
      return dispatch({
        type: 'CLOSE_INTRO',
        payload: {
          showIntro: false,
          introDiscarded: true,
          introAlreadySeen: true
        }
      })
    }
  }
}

export default connect(
  getGame,
  mapDispatchToProps
)(Game)
