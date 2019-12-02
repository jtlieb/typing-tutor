import axios from 'axios'
import { NEXT_WORD, START_TRIAL } from './types'

export const nextWord = word => {
  return dispatch => {
    dispatch({ type: NEXT_WORD, word: word })
  }
}

export const startTrial = () => {
  return dispatch => {
    dispatch({ type: START_TRIAL })
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
