import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types'
import PlaceHolder from '../components/PlaceHolder'

class MyTeamScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>

        <PlaceHolder title={'My Team'}/>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default MyTeamScreen
