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
      {this.props.introAlreadySeen && <a className='close-btn' href='#' onClick={this.props.onDiscardIntro}>X</a>}
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
                its DAY ONE <br />in the infinite universe
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
      window.localStorage.setItem('dayOne.introAlreadySeen', 1)
      return dispatch({
        type: 'CLOSE_INTRO',
        payload: {
          showIntro: false,
          introAlreadySeen: true
        }
      })
    },
    onDiscardIntro: () => {
      window.localStorage.setItem('dayOne.introDiscarded', 1)
      return dispatch({
        type: 'CLOSE_INTRO',
        payload: {
          showIntro: false,
          introDiscarded: true,
          introAlreadySeen: true
        }
      })
    }
  }
}

function mapStateToProps (state) {
  return {
    introAlreadySeen: state.introAlreadySeen
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)
