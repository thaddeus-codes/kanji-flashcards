import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import KanjiCard from './components/kanji/KanjiCard';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import KanjiLevels from './components/kanji/KanjiLevels';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kanjiData: [],
      loading: true,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { data } = await axios({
      method: 'GET',
      url: 'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        'x-rapidapi-key': '70834d5555msh146ccbf79ca3d06p140bf1jsn95e15eef3ce1',
        useQueryString: true,
      },
      params: {
        grade: '1',
      },
    });

    this.setState({ kanjiData: data, loading: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <KanjiLevels />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    color: '#ffffff',
    height: 600,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  card1: {
    backgroundColor: '#9fedb2',
  },
});
