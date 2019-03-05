import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import PropTypes from 'prop-types'

const {width, height} = Dimensions.get('screen')

class QualifyingTeamsItem extends React.Component {
  render(){

    const {teamName, g1, g2, g3, score, onCourse} = this.props
    return (
      <View >
        <View >
            <Text>{`${teamName}`}</Text>
        </View>
        <View >
            <Text>{`Gs: ${g1} ${g2} ${g3} Score: ${score}`}</Text>
        </View>
        <View >
            <Text>{`on course ${onCourse} `}</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  resultsItem:{
    backgroundColor: 'rgba(255,255,255,0.02)',
    // flexDirection:'row',
    // alignItems:'flex-start',
    // width,
    marginVertical:4,
    paddingVertical:4,
    paddingHorizontal:15,
  }
});
/*
g1={item.g1} g2={item.g2} g3={item.g3}
onCourse={item.onCourse}
score={Math.round(item.score)}
teamName={item.teamID}*/
export default QualifyingTeamsItem
