import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: '一',
          text: 'Grade 1 Difficulty Kanji',
          backgroundColor: '#9fedb2',
        },
        {
          title: '二',
          text: 'Grade 2 Difficulty Kanji',
          backgroundColor: '#9fd7ed',
        },
        {
          title: '三',
          text: 'Grade 3 Difficulty Kanji',
          backgroundColor: '#ba9fed',
        },
        {
          title: '四',
          text: 'Grade 4 Difficulty Kanji',
          backgroundColor: '#ed9fd7',
        },
        {
          title: '五',
          text: 'Grade 5 Difficulty Kanji',
          backgroundColor: '#e67373',
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          alert('you press kanji level ' + item.title);
        }}
      >
        <View
          style={[styles.card, { backgroundColor: `${item.backgroundColor}` }]}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
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
            sliderWidth={300}
            itemWidth={300}
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
