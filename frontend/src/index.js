import 'styles.scss'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {equals} from 'ramda'
import Game from 'components/game'
import {render} from 'react-dom'
import getMyPosition from 'helpers/get-my-position'
import tick from 'effects/tick'
import resize from 'effects/resize'
import playerEnergy from 'calculators/player-energy'
import playerPopulation from 'calculators/player-population'
import dysonSwarmEnergy from 'calculators/dyson-swarm-energy'
import gameOver from 'calculators/game-over'
import Planet from 'constructors/planet'
import DysonSwarm from 'constructors/dyson-swarm'
import findPlanetByIndex from 'helpers/find-planet-by-index'
import instructionsSlides from 'helpers/instructions-slides'
import addPopulationLog from 'selectors/player/add-population-log'
import {
  ENERGY_INITIAL,
  ENERGY_PLAYER_CAPACITY,
  DYSON_SWARM_COST,
  POPULATION_INITIAL,
  UNIVERSE_LIFESPAN,
  DYSON_SWARM_ENERGY_HARVEST_INCREMENT
} from './constants'

const buildInitialState = ({introDiscarded, introAlreadySeen}) => {
  const now = Date.now()
  const HUGE = 9999999999999
  const showIntro = !introDiscarded || !introDiscarded

  return {
    viewport: [window.innerWidth, window.innerHeight],
    bigBang: now,
    heatDeath: showIntro ? HUGE : now + UNIVERSE_LIFESPAN,
    now: now,
    players: [
      {
        position: getMyPosition(),
        populationLog: [
          [showIntro ? HUGE : POPULATION_INITIAL, now]
        ],
        energyLog: [
          [showIntro ? HUGE : ENERGY_INITIAL, now]
        ],
        originalMaterial: 'water'
      }
    ],
    planets: [],
    solarSystems: [],
    dysonSwarms: [],
    selectedSolarSystemId: null,
    selectedPlanetIndex: null,
    currentPlayer: 0,
    cameraPositionStart: getMyPosition(),
    cameraPosition: [0, 0],
    showIntro: true,
    showInstructions: true,
    currentSlide: 0,
    instructionsSlides: instructionsSlides,
    introDiscarded,
    introAlreadySeen
  }
}

const reducer = (state, action) => {
  const currentPlayer = state.players[state.currentPlayer]

  switch (action.type) {
    case 'RESTART':
      return buildInitialState({introAlreadySeen: true, introDiscarded: true})

    case 'TICK':
      return {
        ...state,
        now: action.payload,
        gameOver: gameOver({
          energy: playerEnergy(currentPlayer.energyLog) < 0,
          population: false
        })
      }
      // return {
      //   ...state,
      //   now: action.payload,
      //   gameOver: gameOver({
      //     energy: playerEnergy(currentPlayer.energyLog) < 0,
      //     population: state.planets.reduce((current, planet) =>
      //       planet.playerId === state.currentPlayer
      //         ? planetPopulation(planet.populationLog)
      //         : current,
      //       playerPopulation(currentPlayer.populationLog)
      //     ) < POPULATION_INITIAL
      //   })
      // }

    case 'ADD_DYSON_SWARM':
      return {
        ...state,
        dysonSwarms: [
          ...state.dysonSwarms,
          DysonSwarm(
            state.selectedSolarSystemId,
            state.currentPlayer,
            Date.now()
          )
        ],
        players: state.players.map((p, i) =>
          i === state.currentPlayer
            ? {
              ...p,
              energyLog: [...p.energyLog, [-DYSON_SWARM_COST, Date.now()]]
            }
            : p
        )
      }

    case 'HARVEST_DYSON_SWARM':
      const targetDysonSwarm = state.dysonSwarms.find(
        (dysonSwarm) => equals(
          dysonSwarm.solarSystemId,
          state.selectedSolarSystemId
        )
      )

      if (dysonSwarmEnergy(targetDysonSwarm.energyLog) - DYSON_SWARM_ENERGY_HARVEST_INCREMENT < 0) {
        return state
      }

      if (playerEnergy(currentPlayer.energyLog) + DYSON_SWARM_ENERGY_HARVEST_INCREMENT > ENERGY_PLAYER_CAPACITY) {
        return state
      }
      return {
        ...state,
        dysonSwarms: state.dysonSwarms.map((dysonSwarm) =>
          equals(dysonSwarm.solarSystemId, state.selectedSolarSystemId)
            ? {
              ...dysonSwarm,
              energyLog: [
                ...dysonSwarm.energyLog,
                [
                  -DYSON_SWARM_ENERGY_HARVEST_INCREMENT,
                  Date.now()
                ]
              ]
            }
            : dysonSwarm
        ),

        players: state.players.map((player, id) =>
          id === state.currentPlayer
            ? {
              ...player,
              energyLog: [
                ...player.energyLog,
                [
                  DYSON_SWARM_ENERGY_HARVEST_INCREMENT,
                  Date.now()
                ]
              ]
            }
            : player
        )
      }

    case 'RESIZE_VIEWPORT':
      return {
        ...state,
        viewport: action.payload
      }

    case 'ONBOARD_SHIP':
      return addPopulationLog(
        findPlanetByIndex(state, action.payload.index),
        {
          shipPopulation: action.payload.population,
          planetPopulation: -action.payload.population
        }
      )(state)

    case 'POPULATE_PLANET':
      if (playerPopulation(currentPlayer.populationLog) <= action.payload.population) {
        return state
      }

      const planet = findPlanetByIndex(state, action.payload.index) || Planet(
        state.selectedSolarSystemId,
        action.payload.index,
        state.currentPlayer
      )

      return addPopulationLog(
        planet,
        {
          shipPopulation: -action.payload.population,
          planetPopulation: action.payload.population
        }
      )(state)

    case 'SELECT_SOLAR_SYSTEM':
      return {
        ...state,
        selectedSolarSystemId: action.payload,
        selectedPlanetIndex: null
      }

    case 'CLOSE_SOLAR_SYSTEM_HUD':
      return {
        ...state,
        selectedSolarSystemId: null,
        selectedPlanetIndex: null
      }

    case 'SELECT_PLANET':
      return {
        ...state,
        selectedSolarSystemId: action.payload.solarSystem,
        selectedPlanetIndex: action.payload.planetIndex
      }

    case 'CLOSE_INTRO':
      return buildInitialState({introAlreadySeen: true, introDiscarded: true})

    case 'CLOSE_INSTRUCTIONS':
      return {
        ...state,
        showInstructions: false
      }

    case 'GO_TO_SLIDE':
      let newSlide = state.currentSlide + action.payload
      newSlide = (newSlide > instructionsSlides.length - 1)
        ? instructionsSlides.length - 1
        : newSlide
      newSlide = (newSlide < 0) ? 0 : newSlide
      return {
        ...state,
        currentSlide: newSlide
      }

    case 'MOVE':
      return {
        ...state,
        cameraPosition: state.cameraPosition.map((v, i) => v - action.payload[i]),
        players: state.players.map((player, index) => (
          index !== state.currentPlayer
            ? player
            : {
              ...player,
              position: player.position.map((v, i) => v + action.payload[i])
            }
        ))
      }

    default:
      return state
  }
}

const store = createEnvironmentStore()

store.subscribe(tick(store))
store.subscribe(resize(store))

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)

function createEnvironmentStore () {
  const introDiscarded = !!window.localStorage.getItem('dayOne.introDiscarded')
  const introAlreadySeen = !!window.localStorage.getItem('dayOne.introAlreadySeen')

  if (process.env.NODE_ENV !== 'production') {
    return createStore(reducer, buildInitialState({introDiscarded, introAlreadySeen}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(reducer, buildInitialState({introDiscarded, introAlreadySeen}))
}
