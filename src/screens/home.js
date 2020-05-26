/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75,
    marginBottom: 150,
  },
  image: {
    alignSelf: 'flex-start',
    height: '20%',
    width: '50%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'FontSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15,
  },
  subtitle: {
    fontFamily: 'FontSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    paddingBottom: 5,
    paddingTop: 20,
  },
  content: {
    fontFamily: 'FontSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

const Home = () => (
  <View style={styles.center}>
    <ScrollView style={styles.scroll}>
      <Text style={styles.title}>Community Cooperation</Text>
      <Text style={styles.subtitle}>Share whatever you can.</Text>
      <Text style={styles.content}>
        What is needed is a solution that empowers communities to easily connect
        and provide this information to each other.
      </Text>
      <Text />
      <Text />
      <Text />
    </ScrollView>
  </View>
);

export default Home;
