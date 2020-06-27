import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KanjiLevels from './components/kanji/KanjiLevels';
import KanjiCard from './components/kanji/KanjiCard';
import Flashcard from './components/cards/Flashcard';
import CarouselStack from './components/cards/CarouselStack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kanjiData: [],
      loading: true,
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={KanjiLevels}
            style={styles.content}
          />
          {/* <Stack.Screen name="Home" component={Flashcard} /> */}
          <Stack.Screen name="Kanji Review" component={CarouselStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebfcfc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
