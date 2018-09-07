import * as actionTypes from '../actions/actionTypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_DECKS:
    return {
      ...state,
      ...action.decks
    }
  }
}

export default reducer