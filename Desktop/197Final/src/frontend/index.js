import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import axios from 'axios'
import App from './components/App'
import {
  NEXT_WORD,
  START_TRIAL,
  TICK,
  END_TRIAL,
  FINISHED
} from './actions/types'
import randomWords from 'random-words'
import tick from './actions/actions'

const reducer = (state = reset(state), action) => {
  let stateCopy = Object.assign({}, state)
  switch (action.type) {
    case START_TRIAL:
      if (!stateCopy.on) {
        stateCopy.on = true
        stateCopy.trial = {}
      }
      break
    case TICK:
      stateCopy.time--
      console.log(stateCopy.time)
      break

    case END_TRIAL:
      console.log('got here')
      stateCopy.finished = true
      break

    case FINISHED:
      stateCopy = reset(stateCopy)
      break
    case NEXT_WORD:
      const index = stateCopy.index
      const word = stateCopy.words[index]
      if (word === action.word) {
        stateCopy.chars += word.length + 1
        stateCopy.accuracy.correct++
        // 1 = typed correctly, 2 = typed incorrectly
        stateCopy.wordStatus[index] = 1
      } else {
        stateCopy.wordStatus[index] = 2
      }
      stateCopy.accuracy.typed++

      // Adding each key combo to the trial data
      for (let i = 0; i < Math.min(word.length, action.word.length) - 1; i++) {
        const combo = word.charAt(i) + word.charAt(i + 1)
        if (!stateCopy.trial[combo]) {
          state.trial[combo] = { wrong: 0, total: 0 }
        }
        if (
          word.charAt(i) !== action.word.charAt(i) ||
          word.charAt(i + 1) !== action.word.charAt(i + 1)
        ) {
          stateCopy.trial[combo].wrong++
        }

        stateCopy.trial[combo].total++
        if (word.charAt(i) !== action.word.charAt(i)) {
          break
        }
      }

      if (index == 4) {
        stateCopy.words.splice(0, 5)
        stateCopy.words = stateCopy.words.concat(randomWords({ exactly: 5 }))
        stateCopy.index = 0
        stateCopy.wordStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        stateCopy.cpm = Math.floor(
          stateCopy.chars / ((60 - stateCopy.time) / 60)
        )
        console.log('cpm: ' + stateCopy.cpm)
      } else {
        stateCopy.index++
      }
      break
  }
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

function reset(copy) {
  return {
    input: '',
    words: randomWords({ exactly: 15, contains: 'qu' }),
    chars: 0,
    index: 0,
    on: false,
    wordStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    time: 60,
    finished: false,
    cpm: 0,
    accuracy: { correct: 0, typed: 0 }
  }
}
