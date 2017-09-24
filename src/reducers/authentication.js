import {
  CHANGE_AUTH
} from '../actions/types'

// first arg to a reducer is state, with a reasonable default
export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
  }

  return state
}
