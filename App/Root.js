import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LockScreenPasscode from '../App/screens/LockScreenPasscode';
import ApplicationLocked from '../App/screens/ApplicationLocked';

export default class Root extends Component {
  render() {
    return (
      <LockScreenPasscode />
      // <ApplicationLocked />
    );
  }
}
