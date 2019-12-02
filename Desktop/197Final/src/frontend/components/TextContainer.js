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
          backgroundColor: '#ebf5f7',
          flex: 1,
          borderRadius: '0px 0px 7px 7px',
          margin: '0px 10px 10px 10px',
          padding: '0px 0px 20px 0px',
          width: 400
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center ',
            padding: 10
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
