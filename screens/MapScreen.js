import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types'
import PlaceHolder from '../components/PlaceHolder'

class MapScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>

        <PlaceHolder title={'Course Map'}/>

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
export default MapScreen
