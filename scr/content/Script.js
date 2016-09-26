'use strict';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';


export default class Script extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.title}>
          1. Jesus, the Baptizer in the Holy Spirit
        </Text>

        <Text style={styles.text}>
          John the Baptist said two things about Jesus:
        </Text>
        <Text style={styles.text}>
          The next day, he saw Jesus coming to him, and said, "Behold, <Text style={styles.italic}>the Lamb of God who takes away the sin of the world!</Text>" (John 1:29)
        </Text>
        <Text style={styles.text}>
          "I indeed baptize you in water for repentance, but he who comes after me is mightier than I, whose shoes I am not worthy to carry. <Text style={styles.italic}>He will baptize you in the Holy Spirit and with fire.</Text>" (Matthew 3:11)
        </Text>
        <Text style={styles.text}>
          We need to know Jesus in both these ways. If you are saved, you know Jesus as the Lamb of God who has taken your sin away and you will go to heaven when you die, but you also need to know Jesus as the Baptizer in the Holy Spirit.
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',

    marginTop: 20,
    marginRight: 20,
    marginBottom: 10,
    marginLeft: 20,
  },

  text: {
    fontSize: 14,
    lineHeight: 24,
    color: '#000',

    marginRight: 20,
    marginBottom: 10,
    marginLeft: 20,
  },

  italic: {
    fontStyle: 'italic',
  },

  red: {
    color: 'red',
  },
});