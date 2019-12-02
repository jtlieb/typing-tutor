import React from 'react'
import { connect } from 'react-redux'

import TLItem from './TLItem'
import Word from './Word'

class TextContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const words = this.props.reduxState.words
    return (
      <div
        style={{
          display: 'flex',

          color: '141414',
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center '
          }}
        >
          {this.props.reduxState.words.map((value, index) => {
            if (index < 5) {
              return <Word index={index} />
            }
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center '
          }}
        >
          {this.props.reduxState.words.map((value, index) => {
            if (index >= 5 && index < 10) {
              return <Word index={index} />
            }
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center '
          }}
        >
          {this.props.reduxState.words.map((value, index) => {
            if (index >= 10) {
              return <Word index={index} />
            }
          })}
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
