// import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards'

let data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      }
    ]
  }
}

const getDecks = () => {
  // return all of the decks along with their titleCase, questions, and answers
}

const getDeck = () => {
  // take in a single id arg and return the deck associated that that id
}

const saveDeckTitle = () => {
  // take in a single title arg and add it to the decks
}

const addCardToDeck = () => {
  // take in title and card, and will add the card to the list of questions for the deck with associated title
}