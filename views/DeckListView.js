import React, { Component } from 'react'
import { Text, StyleSheet, FlatList, Platform, Animated, Easing } from 'react-native'
import styled from 'styled-components'

import getData from '../dummyDATA'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
const DeckStyled = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
  align-items: center;
  border: 2px;
  padding: 10px;
`
const DeckTitle = styled.Text`
  font-size: 24px;
`

const DeckCount = styled.Text`
  font-size: 20px;
  font-weight: 400;
`

const Deck = ({ title, questions }) => {
  return (
    <DeckStyled>
      <DeckTitle>Deck title: {title}</DeckTitle>
      <DeckCount>Cards: {questions}</DeckCount>
    </DeckStyled>
  )
}

export default class DeckListView extends Component {

  render() {
    const decks = getData()

    return (
      <Container>
        {decks.map(({ title, questions }) => <Deck key={title} title={title} questions={questions} />)}
      </Container>
    );
  }
}