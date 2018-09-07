import React, { Component } from 'react'
// import { FlatList, Platform, Animated, Easing } from 'react-native'
import styled from 'styled-components'
// import { getDecks } from '../store/actions'

import getData from '../dummyDATA'

/**
 * @description Styling for Components
 */
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`
const DeckStyled = styled.TouchableOpacity`
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

// //DUMMY DECK
// const Deck = ({ title, questions }) => {
//   return (
//     <DeckStyled>
//       <DeckTitle>Deck title: {title}</DeckTitle>
//       <DeckCount>Cards: {questions}</DeckCount>
//     </DeckStyled>
//   )
// }

export default class DeckListView extends Component {
  


  render() {
    const deckInfo = getData()

    return (
      <Container>
        {Object.keys(deckInfo).map((key) => {
          const { title, questions } = deckInfo[key]

          return (
            <DeckStyled key={key}>
              <DeckTitle>Deck title: {title}</DeckTitle>
              <DeckCount>Cards: {questions}</DeckCount>
            </DeckStyled>
          )
        })}
      </Container>
    );
  }
}