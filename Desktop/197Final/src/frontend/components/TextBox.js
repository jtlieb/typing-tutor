import React from 'react'
import { connect } from 'react-redux'
import { nextWord, startTrial } from '../actions/actions'

class TextBox extends React.Component {
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
      <div>
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    next: word => dispatch(nextWord(word)),
    start: () => dispatch(startTrial())
  }
}

const mapPropsToState = state => {
  return {
    reduxState: state
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(TextBox)
