import * as actionTypes from './actionTypes'

export const getDecks = decks => ({
  type: actionTypes.GET_DECKS,
  decks
})
