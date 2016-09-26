'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import TaskDescriptionAndroid from 'react-native-android-taskdescription';
import StatusBarAndroid from 'react-native-android-statusbar';

import Script from './scr/content/Script';


const uiTheme = {
  palette: {
    primaryColor: COLOR.teal500,
  },
  toolbar: {
    container: {
      height: 56,
    },
  },
};



class SalvationScript extends Component {
  render() {
    StatusBarAndroid.setHexColor(COLOR.teal700);

    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <TaskDescriptionAndroid backgroundColor={COLOR.teal600} />
          <Toolbar centerElement="Salvation Script" />

          <Script />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('SalvationScript', () => SalvationScript);
