import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { firebase } from '../firebase/Config';
import styles from '../style/style';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Todo');
      } else {
        navigation.replace('Welcome');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}