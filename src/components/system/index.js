import React, { PureComponent } from 'react'
import Orbit from '../orbit'
import Star from '../star'
import {SOLAR_SYSTEM_STAGES} from 'constants'

export default class System extends PureComponent {
  render () {
    const {star, planets, orbits, stage, translations} = this.props

    return <g>
      <Star {...star} stage={stage} />
      {hasPlanets(stage) && orbits.map((orbit, index) => <Orbit
        orbit={orbit}
        translation={translations[index]}
        planet={planets[index]}
      />)}
    </g>
  }
}

const hasPlanets = (stage) => stage === SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE ||
    stage === SOLAR_SYSTEM_STAGES.FUSION_START
