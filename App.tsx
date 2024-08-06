import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SigninScreen from './android/app/src/screens/SigninScreen'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './android/app/src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from './android/app/src/screens/Home';
import Welcome from './android/app/src/screens/Welcome';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false,cardStyleInterpolator: ({current,layouts})=>(
          {
            cardStyle:{
              opacity:current.progress, // thay đổi độ mờ theo quá trình hiện thị
              transform:[
                {
                   translateX:current.progress.interpolate({
                  inputRange:[0,1],
                  outputRange:[layouts.screen.width,0]
                })
                },
                {
                  scale:current.progress.interpolate({
                    inputRange:[0,1],
                    outputRange:[0.5,1]
                  })
                }
               
              ]
            }
          }
        )}}>
       
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        
       
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})