import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Flashcard from './Flashcard';
import axios from 'axios';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [],
    };
    this._renderItem = this._renderItem.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { data } = await axios({
      method: 'GET',
      url: 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/all',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
        'x-rapidapi-key': '70834d5555msh146ccbf79ca3d06p140bf1jsn95e15eef3ce1',
        useQueryString: true,
      },
    });

    this.setState({
      carouselItems: data.filter(kanji => {
        return kanji.references.grade === this.props.route.params.grade;
      }),
      loading: false,
    });
  }

  _renderItem({ item, index }) {
    return <Flashcard kanji={item} />;
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#ebfcfc', paddingTop: 50 }}
      >
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={500}
            itemWidth={400}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontWeight: 'normal',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  card: {
    justifyContent: 'center',
    height: 250,
    borderRadius: 5,
    padding: 5,
    marginLeft: 25,
    marginRight: 25,
  },
});
