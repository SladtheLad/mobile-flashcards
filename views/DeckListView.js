import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import getData from '../dummyDATA'

// Goign to contain the title of each deck and the number of cards in each deck
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 40
  },
  number: {
    fontSize: 30
  }
})

const Deck = ({ title, questions }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card title: {title}</Text>
      <Text style={styles.number}>Number of questions: {questions}</Text>
    </View>
  )
}

export default class DeckListView extends Component {

  render() {
    const decks = getData()

    return (
      <View style={styles.container}>
        {decks.map(({ title, questions }) => <Deck key={title} title={title} questions={questions} />)}
      </View>

    );
  }
}