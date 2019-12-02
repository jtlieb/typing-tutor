import React from 'react'
import { connect } from 'react-redux'

import TLItem from './TLItem'

class TextContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const words = this.props.reduxState.words
    return (
      <div>
        <div style={{ color: '00aeef' }}>
          {words[0] +
            ' ' +
            words[1] +
            ' ' +
            words[2] +
            ' ' +
            words[3] +
            ' ' +
            words[4]}
        </div>
        <div>
          {words[5] +
            ' ' +
            words[6] +
            ' ' +
            words[7] +
            ' ' +
            words[8] +
            ' ' +
            words[9]}
        </div>
        <div>
          {words[10] +
            ' ' +
            words[11] +
            ' ' +
            words[12] +
            ' ' +
            words[13] +
            ' ' +
            words[14]}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxState: state
  }
}

export default connect(mapStateToProps)(TextContainer)
