import React from 'react'
import SolarSystem from './solar-system'

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
  shipPopulation,
  selectedSolarSystem
}) => {
  return (
    <div>
      <div style={hudStyles}>
        <span>DAY ONE</span>
        <span style={{ float: 'right' }}>{shipPopulation}</span>

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
            <h3>
              Solar System
            </h3>
            <p>x: {selectedSolarSystem.position[0]}</p>
            <p>y: {selectedSolarSystem.position[1]}</p>
          </div>
          {selectedSolarSystem.planets.map((p, i) => <div key={i} style={{paddingRight: '30px', width: 160}}>
            <h3>Planet {i}</h3>
            <p>Material: {p.material}</p>
            <p>Gravity: {p.gravity.toFixed(2)}</p>
            <p>Capacity: {p.populationCapacity}</p>
            <button>Populate</button>
          </div>)}
        </div>
      </div>}
    </div>
  )
}
