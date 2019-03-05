import React from 'react';
import { ScreenOrientation } from 'expo'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import DavidsScreen from './screens/DavidsScreen'
import ParticipantsScreen from './screens/ParticipantsScreen'
import MyTeamScreen from './screens/MyTeamScreen'
import LeaderScreen from './screens/LeaderScreen'
import MapScreen from './screens/MapScreen'
import IndividualTeamScreen from './screens/IndividualTeamScreen'

const LeadersNavigator = createStackNavigator(
  {
    Leaders:{
      screen: LeaderScreen,
    },
    IndividualTeam:{
      screen: IndividualTeamScreen,
    },

  },
  {

  }
)

const AppNavigator = createBottomTabNavigator({
  Davids:{
    screen:DavidsScreen,
  },
  Participants:{
    screen: ParticipantsScreen,
  },
  MyTeam:{
    screen: MyTeamScreen,
  },
  Leaders:{
    screen: LeadersNavigator,
  },
  CourseMap:{
    screen: MapScreen,
  },
},{
  initialRouteName: 'Leaders',
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {

  componentDidMount(){
    StatusBar.setHidden(true)
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    return (

      <AppContainer style={styles.container}/>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
