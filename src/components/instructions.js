import React from 'react'

export default function({ slides, onClose, goToPrev, goToNext, currentSlide }) {
  return (
    <div className="instructions-dialog">
      <a className="close-btn" href="#" onClick={onClose}>{'\u00D7'}</a>
      <div className="dialog-container">
        <div className="previous" onClick={goToPrev}>◀</div>
        <div className="next" onClick={goToNext}>▶</div>
        <div className="slide-show">
          <div className="slide">
            <div>{slides[currentSlide].img}</div>
            <div>{slides[currentSlide].text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
