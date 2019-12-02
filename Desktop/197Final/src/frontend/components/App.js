import React from 'react'

import { connect } from 'react-redux'
import TextBox from './TextBox.js'
import TextContainer from './TextContainer'
import TLItem from './TLItem'
import randomWords from 'random-words'

class App extends React.Component {
  constructor(props) {
    super(props)

    // Fetch todos from api server and initialize redux store
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1>Typing Test</h1>
        <TextContainer />
        <TextBox />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxState: state
  }
}

export default connect(mapStateToProps)(App)
