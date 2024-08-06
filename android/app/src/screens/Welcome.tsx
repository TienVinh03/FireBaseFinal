import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SigninScreen from './SigninScreen'

const Welcome = ({navigation}) => {
  return (
    <View>
      <Button title='SignIn' onPress={()=>navigation.navigate("SigninScreen")} />
        <Button title='LogIn' onPress={()=>navigation.navigate("LoginScreen")} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})