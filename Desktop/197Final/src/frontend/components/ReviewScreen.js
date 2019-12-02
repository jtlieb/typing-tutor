import React from 'react'
import { connect } from 'react-redux'
import { finished } from '../actions/actions'

class ReviewScreen extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#ebf5f7',
          borderRadius: '7px',
          margin: '0px 10px 10px 0px',
          padding: '0px 0px 20px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center ',
          flexDirection: 'column',
          width: 400,
          height: 130
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
            fontSize: 12
          }}
        >
          <p>
            CPM: <b>{this.props.reduxState.cpm}</b>
          </p>
          <p>
            WPM: <b>{Math.floor(this.props.reduxState.cpm / 5)}</b>
          </p>
          <p>
            Accuracy:{' '}
            <b>
              {Math.floor(
                (this.props.reduxState.accuracy.correct /
                  this.props.reduxState.accuracy.typed) *
                  100
              )}
              %
            </b>
          </p>
        </div>
        <button onClick={this.props.confirmedFinish}>
          Start Another Trial
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxState: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    confirmedFinish: () => dispatch(finished())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen)
