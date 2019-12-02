import React from 'react'
import { connect } from 'react-redux'
import { nextWord, startTrial } from '../actions/actions'

class Stat extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }

  render() {
    const timer = this.props.isTimer
    return (
      <div
        style={
          timer
            ? {
                display: 'flex',
                marginTop: 10,
                marginBottom: 6,
                padding: 2,
                justifyContent: 'space-between',
                color: 'white',
                backgroundColor: '0f4652',
                borderRadius: 2,
                border: '2px solid 0f4652'
              }
            : {
                display: 'flex',
                paddingTop: 11,
                justifyContent: 'space-between'
              }
        }
      >
        <p>{this.props.statName}</p>
        <b
          style={{
            backgroundColor: timer ? null : 'white',
            border: timer ? '0px' : '2px solid white',
            marginLeft: 5,
            height: 12,
            borderRadius: 2
          }}
        >
          {this.props.stat === 0 ? ' ?' : ' ' + this.props.stat}
        </b>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    reduxState: state
  }
}

export default connect(mapPropsToState)(Stat)
