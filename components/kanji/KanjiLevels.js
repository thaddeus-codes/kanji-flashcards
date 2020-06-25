import React from 'react';
import { Text, View, SafeAreaView, InteractionManager } from 'react-native';

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
      <View style={styles.carouselCard}>
        <Text style={style.title}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50 }}
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
  carouselCard: {
    backgroundColor: `${item.backgroundColor}`,
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
});
