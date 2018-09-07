import React, { Component } from 'react';
// import ReduxThunk from 'redux-thunk';
import { View, Platform, StatusBar } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './store/reducers'
import { Constants } from 'expo'


import DeckListView from './views/DeckListView'
// import NewDeck from './components/NewDeck'
// import NewDeckCards from './components/NewDeckCards'
// import IndividualDeck from './components/IndividualDeck'
// import Quiz from './components/Quiz'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, red } from './utils/_colors'


const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backcrounColor={backgroundColor} {...props} />
    </View>
  )
}

const RouteConfig = {
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: tintColor => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  // NewDeckView: {
  //   screen: NewDeckView,
  //   navigationOptions: {
  //     tabBarLabel: 'Add New Deck',
  //     tabBarIcon: tintColor => <MaterialCommunityIcons name='credit-card-plus' size={30} color={tintColor} />
  //   }
  // }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? white : red,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : red,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}


const Tabs = Platform.OS === 'ios'
  ? createBottomTabNavigator(RouteConfig, TabNavigatorConfig)
  : createMaterialTopTabNavigator(RouteConfig, TabNavigatorConfig)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  // DeckView: {
  //   screen: DeckView,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTintColor: white,
  //     headerStyle: {
  //       backgroundColor: red
  //     }
  //   })
  // },
  // NewDeckView: {
  //   screen: NewDeckView,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTintColor: white,
  //     headerStyle: {
  //       backgroundColor: red
  //     }
  //   })
  // },
  // NewQuestionView: {
  //   screen: NewQuestionView,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTintColor: white,
  //     headerStyle: {
  //       backgroundColor: red
  //     }
  //   })
  // },
  // QuizView: {
  //   screen: QuizView,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTintColor: white,
  //     headerStyle: {
  //       backgroundColor: red
  //     }
  //   })
  // }

})

export default class App extends Component {
  // componentDidMount() {
  //   setLocalNotification()
  // }

  render() {
    // const store = createStore(reducer)

    return (
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={red} barStyle='light-content' />
          <DeckListView />
        </View>
    );
  }
}
