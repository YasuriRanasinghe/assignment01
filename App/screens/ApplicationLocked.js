import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';

export default class ApplicationLocked extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 60,
      minutes: 4,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({seconds: this.state.seconds - 1});
      if (this.seconds === 0) {
        this.setState({minutes: this.state.minutes - 1});
      }
    }, 1000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.Text}> Maximum attempts reached</Text>
          </View>
          <View style={styles.Time}>
            <Text style={styles.Text4}>
              {this.state.minutes} : {this.state.seconds}
            </Text>
          </View>
          <View style={styles.image}>
            <Image source={require('../assets/image/Icon/LOCK.png')} />
          </View>
          <View>
            <Text style={styles.Text2}>
              To protect your information, access has been locked for 5 minutes.
              Come back later and try again.
            </Text>
          </View>
          <TouchableOpacity onPress={() => this}>
            <View style={styles.Text3View}>
              <Text style={styles.Text3}> Quit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Text: {
    fontFamily: 'Roboto-Light',
    fontSize: 25,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    marginBottom: 50,
  },

  image: {
    width: 32,
    height: 35,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text2: {
    marginTop: 80,
    fontFamily: 'Roboto-Light',
    fontSize: 22,
    color: '#92969f',
    letterSpacing: 0.34,
    lineHeight: 25,
    justifyContent: 'flex-end',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  Text3View: {
    backgroundColor: '#a6dde0',
    width: 100,
    height: 60,
    marginTop: 150,
    alignContent: 'center',
    justifyContent: 'center',
  },
  Text3: {
    fontFamily: 'Roboto-Light',
    fontSize: 22,
    marginLeft: 20,
  },
  Text4: {
    fontSize: 20,
    color: '#313334',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Light',
    padding: 8,
    height: 40,
    width: 100,
  },
  Time: {
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    textShadowRadius: 10,
    borderWidth: 3,
  },
});
