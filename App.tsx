
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StoryListComponent from './app/screens/storyList/StoryListComponent';
import JSONRawComponent from './app/screens/jsonComponent/JSONRawComponent';
import SplashScreen from './app/screens/splashScreen/SplashScreen';

console.disableYellowBox = true

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="StoryListComponent"
            component={StoryListComponent}
            options={({ route, navigation }) => ({
              title: 'Story list ',
              headerTitleAlign: 'center',
              headerTintColor: '#1c3952',
              headerStyle: { backgroundColor: '#818e99' },
              headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: '800', },
              route: { route },
              navigation: { navigation }
            })
            }
          />

          <Stack.Screen name="JSONRawComponent" component={JSONRawComponent}
            options={({ route, navigation }) => ({
              title: 'Story Detail ',
              headerTitleAlign: 'center',
              headerTintColor: '#1c3952',
              headerStyle: { backgroundColor: '#818e99' },
              headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: '800', },
            })
            }
          />

          <Stack.Screen name="SplashScreen" component={SplashScreen}
            options={({ route, navigation }) => ({
              title: 'Home',
              headerTitleAlign: 'center',
              headerShown: false,
              //headerTintColor: 'white',
              headerStyle: { backgroundColor: '#a5a9ad' },
              headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
              route: { route },
              navigation: { navigation }
            })
            } />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}

export default App;
