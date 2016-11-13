import React from 'react'
import SolarSystem from './solar-system'
import {POPULATION_ONBOARD_SIZE, SOLAR_SYSTEM_STAGES} from 'constants'

const hudStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  background: 'rgba(0, 0, 0, 0.3)',
  color: '#83bce6',
  padding: 20
}

export default ({
  now,
  bigBang,
  heatDeath,
  shipEnergy,
  shipPopulation,
  selectedSolarSystem,
  currentPopulation,
  currentEnergy,
  totalPopulation,
  planets,
  onClickPopulate,
  onClickOnboard,
  onClickAddSwarm,
  onClickCloseSolarSystemHud
}) => {
  const isMain = selectedSolarSystem && selectedSolarSystem.stage === SOLAR_SYSTEM_STAGES.MAIN_SEQUENCE
  const universeSpent = (now - bigBang) / (heatDeath - bigBang) * 100

  return (
    <div>
      <div style={{...hudStyles, textAlign: 'center'}}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div style={{
            background: 'red',
            opacity: '0.2',
            width: `${universeSpent}%`,
            height: '100%'
          }} />
        </div>

        <span style={{float: 'left'}}>DAY ONE</span>
        <span>{totalPopulation} | {currentPopulation} | {currentEnergy} | </span>
        <span>You will last for X</span>
        <span style={{float: 'right'}}>HEAT DEATH</span>

      </div>

      {selectedSolarSystem && <div
        style={{
          ...hudStyles,
          bottom: 0,
          top: 'auto',
          padding: 10,
          display: 'flex',
          alignItems: 'flex-start',
          background: 'rgba(0, 0, 0, 0.5)'
        }}>
        <div style={{display: 'flex'}}>
          <svg
            width={120}
            height={120}>
            <g transform='scale(0.4)'>
              <SolarSystem
                {...selectedSolarSystem}
                key={selectedSolarSystem.position.join('_')}
                pixelPosition={[150, 150]}
              />
            </g>
          </svg>
        </div>
        <div
          style={{
            display: 'inline-flex',
            height: 110,
            paddingTop: 10
          }}>
          <div style={{paddingRight: '30px', paddingLeft: '30px', width: 160}}>
            <a style={closeButtonStyle} onClick={onClickCloseSolarSystemHud}>{'\u00D7'}</a>
            <h3>{selectedSolarSystem.name}</h3>
            <p>x: {selectedSolarSystem.position[0]}</p>
            <p>y: {selectedSolarSystem.position[1]}</p>
            {selectedSolarSystem.dysonSwarm != null && <p>
              Dyson Swarm energy: {selectedSolarSystem.dysonSwarm.currentEnergy}
            </p>}
            {isMain && selectedSolarSystem.dysonSwarm == null && <button onClick={onClickAddSwarm}>
              Add Dyson Swarm
            </button>}
          </div>
          {isMain && !selectedSolarSystem.dysonSwarm && selectedSolarSystem.planets.map((p, i) => <div key={i} style={{paddingRight: '30px', width: 160}}>
            <h3>Planet {i}</h3>
            <p>Material: {p.material}</p>
            <p>Gravity: {p.gravity.toFixed(2)}</p>
            <p>Capacity: {p.populationCapacity}</p>
            <p>Population: {p.currentPopulation || 0}</p>
            <button
              onClick={() => onClickPopulate(i)}
              disabled={!acceptPopulation(p, currentPopulation)}>
              Populate
            </button>
            <button
              onClick={() => onClickOnboard(i)}
              disabled={!canOnboard(p)}>
              Onboard
            </button>
          </div>)}
        </div>
      </div>}
    </div>
  )
}

const acceptPopulation = (planet, shipCurrentPopulation) =>
  planet.populationCapacity > (planet.currentPopulation || 0) &&
    shipCurrentPopulation > POPULATION_ONBOARD_SIZE

const canOnboard = (planet) =>
  planet.currentPopulation >= POPULATION_ONBOARD_SIZE

const closeButtonStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  padding: '10px',
  fontSize: '30px',
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer'
}
