import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'
import {BUTTON_COLOR} from '../utils/styleConstants'

class LeadersButtonSwitch extends React.Component{
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
  }
  render(){
    const containerStyle = this.props.selected ? styles.containerSelect : styles.containerDeselect
    const textStyle = this.props.selected ? styles.textSelect : styles.text
    return (
      <View >
        <TouchableOpacity
          style={[styles.container, containerStyle]}
          onPress={() => this.props.onPress(this.props.title)}
        >
          <Text style={textStyle}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderStyle: 'solid',
    borderColor: BUTTON_COLOR,
    borderWidth: 1,
    paddingTop: 9,
    width: 130,
    height: 40,
  },
  containerDeselect:{
    backgroundColor: '#fff',
  },
  containerSelect:{
    backgroundColor: BUTTON_COLOR,
  },
  text:{
    textAlign: 'center',
    fontSize: 15,
    color: BUTTON_COLOR,
  },
  textSelect:{
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',

  }
})

export default LeadersButtonSwitch
