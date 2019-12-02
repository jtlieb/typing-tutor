import React from 'react'
import { connect } from 'react-redux'
import { NEXT_WORD } from '../actions/types'
import { nextWord } from '../actions/actions'

class Word extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }

  handleChange(event) {
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
    next: word => dispatch(nextWord(word))
  }
}

export default connect(null, mapDispatchToProps)(TextBox)
