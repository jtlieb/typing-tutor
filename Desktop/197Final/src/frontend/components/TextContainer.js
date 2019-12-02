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
          backgroundColor: '#ebf5f7',
          padding: '0px 10px 0px 10px',
          flex: 1,
          borderRadius: 7,
          margin: 10,
          flexDirection: 'column',
          width: 500,
          shadowOffset: { width: 10, height: 10 }
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
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
            justifyContent: 'center',
            alignItems: 'center '
          }}
        >
          {this.props.reduxState.words.map((value, index) => {
            if (index >= 5 && index < 10) {
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
