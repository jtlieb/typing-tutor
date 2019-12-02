import React from 'react'
import { connect } from 'react-redux'
import { NEXT_WORD } from '../actions/types'
import { nextWord } from '../actions/actions'

class Word extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let color = '041333'
    switch (this.props.reduxState.wordStatus[this.props.index]) {
      case 1:
        color = 'green'
        break
      case 2:
        color = 'red'
    }
    if (this.props.index === this.props.reduxState.index) {
      console.log(this.props.index + '******')
      return (
        <div>
          <p
            style={{
              border: '1px solid black',
              borderRadius: '3px',
              margin: '0px 3px 0px 3px',
              padding: '0px 3px 0px 3px',
              color: color
            }}
          >
            {this.props.reduxState.words[this.props.index]}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p
            style={{
              padding: '0px 3px 0px 3px',
              margin: '0px 3px 0px 3px',
              color: color
            }}
          >
            {'  ' + this.props.reduxState.words[this.props.index] + '  '}
          </p>
        </div>
      )
    }
  }
}

const mapPropsToState = state => {
  return {
    reduxState: state
  }
}

export default connect(mapPropsToState)(Word)
