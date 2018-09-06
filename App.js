import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { DeckListView } from './views/DeckListView'

import getData from './dummyDATA'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  card: {
    marginBottom: 20,
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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{questions}</Text>
    </View>
  )
}


export default class App extends React.Component {

  render() {
    const decks = getData()

    return (
      <View style={styles.container}>
      {decks.map(({ title, questions }) => <Deck key={title} title={title} questions={questions} />)}
      </View>

    );
  }
}
