import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const user = auth().currentUser;

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('LoginScreen'); // Navigate to Login screen on logout
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Welcome, {user?.email}!</Text>
    <Button title="Logout" onPress={handleLogout} />
  </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});