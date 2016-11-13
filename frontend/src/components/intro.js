import React, {Component} from 'react'
import {connect} from 'react-redux'
import {INTRO_TIME} from 'constants'

class Intro extends Component {
  componentDidMount () {
    setInterval(() => {
      this.props.onCloseIntro()
    }, INTRO_TIME)
  }

  render () {
    return <div className='intro-dialog'>
      <a className='close-btn' href='#' onClick={this.props.onCloseIntro}>X</a>
      <div className='dialog-container'>
        <div className='dialog'>
          <div className='slide-show'>
            <div className='slide slide1'>
                everything has changed…<br />your solar system is dead
            </div>
            <div className='slide slide2'>
                the lifes of all survivours is in your hands
            </div>
            <div className='slide slide3'>
                discover solar systems and populate them to save your generation
            </div>
            <div className='slide slide4'>
                its DAY ONE for you in the infinite universe
            </div>
            <div className='slide slide5'>
                your mission starts now!
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onCloseIntro: () => {
      return dispatch({
        type: 'CLOSE_INTRO'
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Intro)
