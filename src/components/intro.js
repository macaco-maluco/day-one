import React, {Component} from 'react'

export default class Intro extends Component {
  render () {
    return <div className='intro-dialog'>
      <a className='close-btn' href='#' onClick={this.props.onDiscard}>X</a>
      <div className='dialog-container'>
        <div className='slide-show'>
          <div className='slide slide1'>
              everything has changed…<br />your solar system is dead
          </div>
          <div className='slide slide2'>
              the lives of all survivours are in your hands now
          </div>
          <div className='slide slide3'>
              discover new solar systems to save your generation
          </div>
          <div className='slide slide4'>
              it's DAY ONE <br />in the infinite universe
          </div>
          <div className='slide slide5'>
              your mission starts now!
          </div>
        </div>
      </div>
    </div>
  }
}
