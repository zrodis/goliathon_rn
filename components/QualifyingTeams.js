import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'
import { GRAPH_HEADER_STYLE, LIST_STYLE, G1_COLOR, G2_COLOR, G3_COLOR } from '../utils/styleConstants'

//flex sizes
const RANK_COLUMN = 1
const NAME_COLUMN = 3
const POINTS_COLUMN = 3
const ONCOURSE_COLUMN = 0.5

let highScore = 100

class ScoreGraph extends React.Component{
  render(){
    const {g1, g2, g3, score} = this.props

    let totalRatio = score / highScore
    let flexGraph = totalRatio
    let flexAntiGraph = 1 - totalRatio + 0.15

    const totalG = parseInt(g1) + parseInt(g2) + parseInt(g3)

    let flexG3 = parseInt(g3) / totalG
    let flexG2 = parseInt(g2) / totalG
    let flexG1 = parseInt(g1) / totalG
    return(
      <View style={[graphStyles.scoreHolder]}>
        <View style={[graphStyles.scoreHolder, {flex:flexGraph}]}>
          <View style={[graphStyles.g3, {flex:flexG3}]}>

          </View>
          <View style={[graphStyles.g2, {flex:flexG2}]}>

          </View>
          <View style={[graphStyles.g1, {flex:flexG1}]}>

          </View>

        </View>
        <View style={[{flex:flexAntiGraph}, {paddingLeft:3}]}>
          <Text>{score}</Text>
        </View>
      </View>
    )
  }
}

const graphStyles = StyleSheet.create({
  scoreHolder:{
    flexDirection: 'row',
    height:20,
  },
  g3:{
    marginHorizontal: -1,
    backgroundColor: G3_COLOR,
  },
  g2:{
    marginHorizontal: -1,
    backgroundColor: G2_COLOR,
  },
  g1:{
    marginHorizontal: -1,
    backgroundColor: G1_COLOR,
  },
})

class QualifyingTeamsItem extends React.Component {
  render(){

    const {index, teamName, g1, g2, g3, score, onCourse, onPressPerson} = this.props

    return (
      <View >
        <TouchableOpacity onPress={() => {
          const rank = index
          return this.props.onPressTeam({
            rank, teamName, g1, g2, g3, score, onCourse, onPressPerson}
          )}
        }>
          <View style={LIST_STYLE.lineItem}>
            <View style={{flex:RANK_COLUMN}}>
              <Text style={[LIST_STYLE.text, {textAlign:'center'} ]}>{(index + 1) + '.'}</Text>
            </View>
            <View style={{flex:NAME_COLUMN}}>
              <Text style={LIST_STYLE.text}>{teamName}</Text>
            </View>
            <View style={{flex:POINTS_COLUMN}}>
              <ScoreGraph g1={g1} g2={g2} g3={g3} score={score} />
            </View>
            <View style={[{flex:ONCOURSE_COLUMN}]}>
              <Text style={[LIST_STYLE.text,  {textAlign:'right'}]}>{onCourse}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


class QualifyingTeams extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={[GRAPH_HEADER_STYLE.headerBar]}>
          <View style={{flex:RANK_COLUMN + 0.2 }}>
            <Text style={[GRAPH_HEADER_STYLE.text, {textAlign:'center'}]}>Rank</Text>
          </View>
          <View style={{flex:NAME_COLUMN + 0.7 }}>
            <Text style={GRAPH_HEADER_STYLE.text}>Name</Text>
          </View>
          <View style={{flex:POINTS_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>Points</Text>
          </View>
          <View style={{flex:ONCOURSE_COLUMN + 1}}>
            <Text style={[GRAPH_HEADER_STYLE.text, {textAlign:'right'}]}>{'On Course'}</Text>
          </View>
        </View>
        <FlatList
          data={this.props.qualifyingTeamsData}
          renderItem = { ({item, index}) => {
            highScore = item.score > highScore ? item.score : highScore

            return <QualifyingTeamsItem
                      index={index}
                      g1={item.g1} g2={item.g2} g3={item.g3} key={item._id}
                      onCourse={item.onCourse}
                      score={Math.round(item.score)}
                      teamName={item.teamID}
                      onPressTeam={(teamObj) => this.props.onPressTeam(teamObj)}
                      onPressPerson={(teamObj) => this.props.onPressPerson(teamObj)}
                  />
          }}
          keyExtractor={(item) => {//keyExtractor, basically a map()
            return item._id.toString()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
export default QualifyingTeams
