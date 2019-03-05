import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types'

class PlaceHolder extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{"Placeholder for " + this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection:'row',
    // backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color:"#ddd",
    textAlign:'center',
  }
})

export default PlaceHolder
