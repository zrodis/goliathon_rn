import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {GRAPH_HEADER_STYLE, LIST_STYLE, G1_COLOR, G2_COLOR, G3_COLOR,} from '../utils/styleConstants'

//flex values
const OBSTACLE_NUM_COLUMN = 1
const OBSTACLE_NAME_COLUMN = 3
const TIER_COLUMN = 1.3
const SUCCESS_COLUMN = 1.7
const SCORE_COLUMN = 1

const OBS_NAME = ['Water Carry', 'Ninja Killer', 'Hangman', 'Leap of Faith', 'Balancing Act', 'Half Dome', 'Rope Cross', 'Slippery Wall Monkey', 'Circus Maximus', 'Skyclimb', 'The Destroyer', 'Over the Moon'  ]
const SCORE_LEVEL = [1, 3, 5]

class ObstacleChart extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={[GRAPH_HEADER_STYLE.headerBar]}>
          <View style={{flex:OBSTACLE_NUM_COLUMN  }}>
            <Text style={[GRAPH_HEADER_STYLE.text, {textAlign: 'center'}]}>No.</Text>
          </View>
          <View style={{flex:OBSTACLE_NAME_COLUMN }}>
            <Text style={GRAPH_HEADER_STYLE.text}>Obstacle</Text>
          </View>
          <View style={{flex:TIER_COLUMN}}>
            <Text style={[GRAPH_HEADER_STYLE.text, {textAlign: 'center'}]}>Tier</Text>
          </View>
          <View style={{flex:SUCCESS_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>Result</Text>
          </View>
          <View style={{flex:SCORE_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>Pts.</Text>
          </View>

        </View>

        <FlatList
          data={[...this.props.obstData].sort((a, b) => {

            return parseInt(a.obstID) > parseInt(b.obstID)
          })}
          renderItem = { ({item, index}) => {
            const failColor = '#999'
            const bgColor = !item.success ? failColor :
                            parseInt(item.tier) === 1 ? G1_COLOR :
                            parseInt(item.tier) === 2 ? G2_COLOR :
                            parseInt(item.tier) === 3 ? G3_COLOR : failColor

            return (
                    <View style={[LIST_STYLE.lineItem, {backgroundColor: bgColor}]}>
                      <View style={[{flex:OBSTACLE_NUM_COLUMN  }]}>
                        <Text style={[styles.listItemText, {textAlign: 'center'}]}>{item.obstID + '.'}</Text>
                      </View>
                      <View style={{flex:OBSTACLE_NAME_COLUMN }}>
                        <Text style={styles.listItemText}>{OBS_NAME[parseInt(item.obstID - 1)]}</Text>
                      </View>
                      <View style={{flex:TIER_COLUMN}}>
                        <Text style={[styles.listItemText, {textAlign: 'center'}]}>{item.tier}</Text>
                      </View>
                      <View style={{flex:SUCCESS_COLUMN}}>
                        <Text style={styles.listItemText}>{item.success ? "Success" : '- - -'}</Text>
                      </View>
                      <View style={{flex:SCORE_COLUMN}}>
                        <Text style={styles.listItemText}>{item.success ? SCORE_LEVEL[parseInt(item.tier) - 1] : '0'}</Text>
                      </View>
                    </View>
                  )
          }}
          keyExtractor={(item) => {
            return item._id.toString()
          }}
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 50,
  },
  listItemText:{
    color: '#fff',
    fontSize: 13,
  }
})
export default ObstacleChart
