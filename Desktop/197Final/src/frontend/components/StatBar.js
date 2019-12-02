import React from 'react'
import { connect } from 'react-redux'
import { nextWord, startTrial } from '../actions/actions'
import Stat from './Stat'

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
        <Stat statName="Characters Typed:" stat={this.props.reduxState.chars} />
        <Stat statName="CPM:" stat={this.props.reduxState.cpm} />
        <Stat
          statName="WPM:"
          stat={Math.floor(this.props.reduxState.cpm / 5)}
        />
        <Stat
          statName="Accuracy:"
          stat={
            this.props.reduxState.accuracy.typed === 0
              ? 0
              : Math.floor(
                  (this.props.reduxState.accuracy.correct * 100) /
                    this.props.reduxState.accuracy.typed
                ) + '%'
          }
        />
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
