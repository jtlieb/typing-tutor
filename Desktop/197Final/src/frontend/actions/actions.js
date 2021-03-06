import axios from 'axios'
import {
  NEXT_WORD,
  START_TRIAL,
  TICK,
  END_TRIAL,
  FINISHED,
  USERNAME
} from './types'

export const nextWord = word => {
  return dispatch => {
    dispatch({ type: NEXT_WORD, word: word })
  }
}

export const startTrial = () => {
  return dispatch => {
    setIntervalX(
      () => {
        dispatch(tick())
      },
      1000,
      60,
      dispatch
    )
    dispatch({ type: START_TRIAL })
  }
}

export const tick = () => {
  return dispatch => {
    dispatch({ type: TICK })
  }
}

export const end = () => {
  return dispatch => {
    dispatch({ type: END_TRIAL })
  }
}

export const finished = () => {
  return dispatch => {
    dispatch({ type: FINISHED })
  }
}

export const removeTodo = todoId => {
  return dispatch => {
    axios
      .post('/api/remove_todo', { todoId })
      .then(({ data }) => {
        dispatch({ type: REMOVE_TODO_SUCCESS, todos: data })
      })
      .catch(error => {
        dispatch({ type: REMOVE_TODO_FAILURE, error })
      })
  }
}

function setIntervalX(callback, delay, repetitions, dispatch) {
  var x = 0
  var intervalID = window.setInterval(function() {
    callback()

    if (++x === repetitions) {
      dispatch(end())
      window.clearInterval(intervalID)
    }
  }, delay)
}
