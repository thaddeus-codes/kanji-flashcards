import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function KanjiCard(props) {
  return (
    <View style={styles.container}>
      <Text>{props.kanji.kanji.character}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ffff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 500,
  },
});
