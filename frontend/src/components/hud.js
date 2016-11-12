import React from 'react'

export default ({ shipPopulation }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        background: 'rgba(0, 0, 0, 0.3)',
        color: '#83bce6',
        padding: 20
      }}
    >
      <span>DAY ONE</span>
      <span style={{ float: 'right' }}>{shipPopulation}</span>
    </div>
  )
}
