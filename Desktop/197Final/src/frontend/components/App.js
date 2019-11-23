import React from 'react'

import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)

    // Fetch todos from api server and initialize redux store
  }

  render() {
    console.log('testing')
    return (
      <div>
        <div>
          <h1>Groceries</h1>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getTodos: () => dispatch(getTodos())
//   }
// }

export default connect(null)(App)
