import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import axios from 'axios'
import App from './components/App'
import { NEXT_WORD, START_TRIAL } from './actions/types'
import randomWords from 'random-words'

const reducer = (
  state = {
    input: '',
    words: randomWords({ exactly: 15 }),
    chars: 0,
    index: 0,
    on: false,
    trial: {}
  },
  action
) => {
  let stateCopy = Object.assign({}, state)
  switch (action.type) {
    case START_TRIAL:
      if (!stateCopy.on) {
        stateCopy.on = true

        // Adding Trial Parameter
      }
      break
    case NEXT_WORD:
      const index = stateCopy.index
      const word = stateCopy.words[index]
      console.log(stateCopy.words[index])
      if (word === action.word) {
        stateCopy.chars += word.length
      }

      // Adding each key combo to the trial data
      for (let i = 0; i < Math.min(word.length, action.word.length) - 1; i++) {
        const combo = word.charAt(i) + word.charAt(i + 1)
        if (!stateCopy.trial[combo]) {
          state.trial[combo] = { correct: 0, total: 0 }
        }
        if (
          word.charAt(i) === action.word.charAt(i) &&
          word.charAt(i + 1) === action.word.charAt(i + 1)
        ) {
          stateCopy.trial[combo].correct++
        }

        stateCopy.trial[combo].total++
        if (word.charAt(i) !== action.word.charAt(i)) {
          break
        }
      }

      console.log(stateCopy.trial)

      if (index == 4) {
        stateCopy.words.splice(0, 5)
        stateCopy.words = stateCopy.words.concat(randomWords({ exactly: 5 }))
        stateCopy.index = 0
      } else {
        stateCopy.index++
      }
      break
  }
  console.log(stateCopy.words)
  console.log('****************')
  console.log(stateCopy.words[stateCopy.index])
  console.log('****************')
  console.log(stateCopy.chars)
  return stateCopy
}

// Enables asynchronous actions. Docs here: https://github.com/reduxjs/redux-thunk

const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  // Provider enables descendant react components to access redux store and dispatch actions to redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app') // binds to <div id="react-app"> in public/index.html
)
