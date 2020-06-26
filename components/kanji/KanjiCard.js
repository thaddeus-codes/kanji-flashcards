import React, { Component } from 'react';
import axios from 'axios';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { StyleSheet, Text } from 'react-native';
import { BaseRouter } from '@react-navigation/native';

export default class KanjiCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      kanjiData: [],
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
        grade: this.props.route.params.grade,
      },
    });

    this.setState({ kanjiData: data, loading: false });
  }

  render() {
    let key = 0;
    console.log(this.state.kanjiData);
    return (
      <CardStack
        style={styles.content}
        ref={swiper => {
          this.swiper = swiper;
        }}
      >
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.kanjiData.map(kanji => {
            key++;
            return (
              <Card
                style={[
                  styles.card,
                  { backgroundColor: this.props.route.params.backgroundColor },
                ]}
                key={key}
              >
                <Text style={styles.label}>{kanji.kanji.character}</Text>
              </Card>
            );
          })
        )}
      </CardStack>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    color: '#ffffff',
    height: 600,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 130,
    fontWeight: 'bold',
  },
});
