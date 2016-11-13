import 'styles.scss'
import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Game from 'components/game'
import {render} from 'react-dom'
import getMyPosition from 'helpers/get-my-position'
import tick from 'effects/tick'
import resize from 'effects/resize'
import playerPopulation from 'calculators/player-population'
import Planet from 'constructors/planet'
import findPlanetByIndex from 'helpers/find-planet-by-index'
import instructionsSlides from 'helpers/instructions-slides'
import addPopulationLog from 'selectors/player/add-population-log'
import {
  ENERGY_INITIAL,
  POPULATION_INITIAL,
  UNIVERSE_BIG_BANG,
  UNIVERSE_LIFESPAN
} from './constants'

const initialState = {
  viewport: [window.innerWidth, window.innerHeight],
  bigBang: UNIVERSE_BIG_BANG,
  heatDeath: UNIVERSE_BIG_BANG + UNIVERSE_LIFESPAN,
  now: Date.now(),
  players: [
    {
      position: getMyPosition(),
      populationLog: [
        [POPULATION_INITIAL, Date.now()]
      ],
      energyLog: [
        [ENERGY_INITIAL, Date.now()]
      ]
    },
    {
      position: [getMyPosition()[0] + 200, getMyPosition()[1] + 200],
      populationLog: [
        [POPULATION_INITIAL, Date.now()]
      ],
      energyLog: [
        [ENERGY_INITIAL, Date.now()]
      ]
    }
  ],
  planets: [],
  solarSystems: [],
  selectedSolarSystemId: null,
  selectedPlanetIndex: null,
  currentPlayer: 0,
  cameraPositionStart: getMyPosition(),
  cameraPosition: [0, 0],
  showIntro: true,
  showInstructions: true,
  currentSlide: 0,
  instructionsSlides: instructionsSlides,
  introDiscarded: !!window.localStorage.getItem('dayOne.introDiscarded'),
  introAlreadySeen: !!window.localStorage.getItem('dayOne.introAlreadySeen')
}

const reducer = (state, action) => {
  const currentPlayer = state.players[state.currentPlayer]

  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        now: action.payload
      }

    case 'RESIZE_VIEWPORT':
      return {
        ...state,
        viewport: action.payload
      }

    case 'ONBOARD_SHIP':
      if (playerPopulation(currentPlayer.populationLog) <= action.payload.population) {
        return state
      }

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

    case 'SELECT_PLANET':
      return {
        ...state,
        selectedSolarSystemId: action.payload.solarSystem,
        selectedPlanetIndex: action.payload.planetIndex
      }

    case 'CLOSE_INTRO':
      return {
        ...state,
        ...action.payload
      }

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

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

tick(store.dispatch)
resize(store.dispatch)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
