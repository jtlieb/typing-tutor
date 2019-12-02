import React from 'react'
import { connect } from 'react-redux'
import { nextWord, startTrial } from '../actions/actions'

class StatBar extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (!this.props.reduxState.on) {
      this.props.start()
    }
    if (event.target.value.includes(' ')) {
      // THIS IS WHERE SOMETHING WILL GO
      console.log(this.state.text)
      this.setState({ text: '' })
      this.props.next(this.state.text)
    } else {
      this.setState({ text: event.target.value })
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '76d1e3',
          width: 400,
          height: 20,
          borderRadius: '7px 7px 0px 0px',
          display: 'flex',
          flexDirection: 'row',
          padding: 6,
          fontSize: 8
        }}
      >
        <p>Characters Typed:</p>
        <b
          style={{
            margin: '0px 0px 0px 6px'
          }}
        >
          {this.props.reduxState.chars === 0
            ? ' ?'
            : ' ' + this.props.reduxState.chars}
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

export default connect(mapPropsToState)(StatBar)
