import React from 'react'

export default function ({onRestart, gameOver}) {
  return <div className='instructions-dialog'>
    <div className='slide-show'>
      <div className='slide'>
        GAME OVER
        <p>{
            gameOver.type === 'ENERGY'
              ? 'Your ship run out of energy! Build more dyson swarms around solar systems next time.'
              : 'Too few have survived! You can not sustain your civilisation.'
        }</p>
        <button onClick={onRestart}>RESTART THE MISSION</button>
      </div>
    </div>
  </div>
}
