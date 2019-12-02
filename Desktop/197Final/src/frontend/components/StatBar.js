import React from 'react'
import { connect } from 'react-redux'
import { nextWord, startTrial } from '../actions/actions'

class StatBar extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '76d1e3',
          width: 400,
          height: 30,
          borderRadius: '7px 7px 0px 0px',
          display: 'flex',
          flexDirection: 'row',
          fontSize: 8,
          padding: '0px 20px 0px 20px',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '11px 0px 0px 0px',
            width: '90px',
            justifyContent: 'space-between'
          }}
        >
          <p>Characters Typed:</p>
          <b
            style={{
              backgroundColor: 'white',
              border: '2px solid white',
              height: 13,
              borderRadius: 2
            }}
          >
            {this.props.reduxState.chars === 0
              ? ' ?'
              : ' ' + this.props.reduxState.chars}
          </b>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '11px 0px 0px 0px',
            width: '40px',
            justifyContent: 'space-between'
          }}
        >
          <p>Time:</p>
          <b
            style={{
              backgroundColor: 'white',
              border: '2px solid white',
              height: 13,
              borderRadius: 2
            }}
          >
            {this.props.reduxState.time}
          </b>
        </div>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    reduxState: state
  }
}

export default connect(mapPropsToState)(StatBar)
