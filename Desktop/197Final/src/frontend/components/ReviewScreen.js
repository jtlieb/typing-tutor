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
          width: 400,
          height: 130
        }}
      >
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
