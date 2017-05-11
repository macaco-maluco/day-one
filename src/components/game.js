import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import { equals } from 'ramda'
import getGame from 'selectors/game'
import SolarSystem from './solar-system/index'
import Player from './player'
import TargetMarker from './target-marker'
import Particles from './particles'
import Intro from './intro'
import EndGame from './end-game'
import Hud from './hud'

import { POPULATION_ONBOARD_SIZE } from 'constants'

function Game(props) {
  const {
    scale,
    cameraPosition,
    onMove,
    onSelectSolarSystem,
    onSelectPlanet,
    solarSystems,
    viewport,
    particleMatrix,
    position,
    otherPlayers,
    introDiscarded,
    showIntro,
    onCloseIntro,
    onDiscardIntro,
    onChangeScale,
    introAlreadySeen,
    planets,
    gameOver,
    restartGame
  } = props

  if (gameOver) return <EndGame gameOver={gameOver} onRestart={restartGame} />
  if (!gameOver && !introDiscarded && showIntro)
    return (
      <Intro alreadySeen={introAlreadySeen} onDiscard={onDiscardIntro} onClose={onCloseIntro} />
    )
  return (
    <div>
      <Hud {...props} />
      <Motion
        defaultStyle={{
          x: cameraPosition[0],
          y: cameraPosition[1],
          playerX: position[0],
          playerY: position[1]
        }}
        style={{
          x: spring(cameraPosition[0]),
          y: spring(cameraPosition[1]),
          playerX: spring(position[0], { stiffness: 111, damping: 33 }),
          playerY: spring(position[1], { stiffness: 111, damping: 33 })
        }}
      >
        {style => (
          <svg
            viewBox={`${style.x - viewport[0] * scale / 2} ${style.y - viewport[1] * scale / 2} ${viewport[0] * scale} ${viewport[1] * scale}`}
            onClick={e => onMove([e.pageX - viewport[0] / 2, e.pageY - viewport[1] / 2])}
            onWheel={e => {
              e.preventDefault()
              e.stopPropagation()
              onChangeScale(e.deltaY)
            }}
            width={viewport[0]}
            height={viewport[1]}
            style={{
              background: '#10052b',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
            }}
          >
            <Content
              viewport={viewport}
              particleMatrix={particleMatrix}
              solarSystems={solarSystems}
              planets={planets}
              onSelectSolarSystem={onSelectSolarSystem}
              onSelectPlanet={onSelectPlanet}
              otherPlayers={otherPlayers}
              position={position}
            />
            <Player position={[style.playerX, style.playerY]} />
          </svg>
        )}
      </Motion>
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
  shouldComponentUpdate(nextProps) {
    return (
      this.props.viewport !== nextProps.viewport ||
      this.props.particleMatrix !== nextProps.particleMatrix ||
      this.props.solarSystems !== nextProps.solarSystems ||
      this.props.otherPlayers !== nextProps.otherPlayers ||
      this.props.position !== nextProps.position
    )
  }

  render() {
    const {
      viewport,
      particleMatrix,
      solarSystems,
      onSelectSolarSystem,
      onSelectPlanet,
      otherPlayers,
      position,
      planets
    } = this.props

    return (
      <g>
        <Particles viewport={viewport} particleMatrix={particleMatrix} />
        {solarSystems.map(solarSystem => (
          <SolarSystem
            onClickStar={() => onSelectSolarSystem(solarSystem.id)}
            onClickPlanet={planetIndex => onSelectPlanet(solarSystem.id, planetIndex)}
            key={solarSystem.position.join('')}
            {...solarSystem}
            planets={mergePlanetMetadata(solarSystem.id, solarSystem.planets, planets)}
          />
        ))}
        {otherPlayers.map(player => <Player position={player.position} />)}
        <TargetMarker position={position} />
      </g>
    )
  }
}

const mergePlanetMetadata = (solarSystemId, planets, planetsMetadata) => {
  return planets.map((planet, i) => ({
    ...planet,
    ...(planetsMetadata.find(p => equals(solarSystemId, p.solarSystemId) && p.index === i) || {})
  }))
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeScale: amount =>
      dispatch({
        type: 'SCALE',
        payload: amount
      }),
    onMove: delta =>
      dispatch({
        type: 'MOVE',
        payload: delta
      }),
    onSelectSolarSystem: solarSystem =>
      dispatch({
        type: 'SELECT_SOLAR_SYSTEM',
        payload: solarSystem
      }),
    onClickCloseSolarSystemHud: () =>
      dispatch({
        type: 'CLOSE_SOLAR_SYSTEM_HUD'
      }),
    onSelectPlanet: (solarSystem, planetIndex) =>
      dispatch({
        type: 'SELECT_PLANET',
        payload: {
          solarSystem,
          planetIndex
        }
      }),
    onClickPopulate: planetIndex =>
      dispatch({
        type: 'POPULATE_PLANET',
        payload: {
          index: planetIndex,
          population: POPULATION_ONBOARD_SIZE
        }
      }),
    onClickOnboard: planetIndex =>
      dispatch({
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
    },
    onClickAddSwarm: () => {
      return dispatch({
        type: 'ADD_DYSON_SWARM'
      })
    },
    onCloseInstructions: () => {
      return dispatch({
        type: 'CLOSE_INSTRUCTIONS'
      })
    },
    onClickDysonSwarmCollect: () => {
      return dispatch({
        type: 'HARVEST_DYSON_SWARM'
      })
    },
    goToPrevSlide: () => {
      return dispatch({
        type: 'GO_TO_SLIDE',
        payload: -1
      })
    },
    goToNextSlide: () => {
      return dispatch({
        type: 'GO_TO_SLIDE',
        payload: 1
      })
    },
    restartGame: () => {
      return dispatch({
        type: 'RESTART'
      })
    }
  }
}

export default connect(getGame, mapDispatchToProps)(Game)
