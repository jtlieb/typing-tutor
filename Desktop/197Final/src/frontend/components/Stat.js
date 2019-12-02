import React from 'react'
import { connect } from 'react-redux'
import { nextWord, startTrial } from '../actions/actions'

class Stat extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          paddingTop: 11,
          justifyContent: 'space-between'
        }}
      >
        <p>{this.props.statName}</p>
        <b
          style={{
            backgroundColor: 'white',
            border: '2px solid white',
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
