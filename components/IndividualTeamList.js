import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'
import {GRAPH_HEADER_STYLE, LIST_STYLE, G1_COLOR, G2_COLOR, G3_COLOR,} from '../utils/styleConstants'
import {float100} from '../utils/mathHelper'
//flex sizes
const RANK_COLUMN = 1
const NAME_COLUMN = 3
const POINTS_COLUMN = 1
const ROPE_COLUMN = 1.5
const G_COLUMN= 0.5
const OBST_COLUMN = 1



class IndividualTeamItem extends React.Component {
  render(){
    const {index, name, score, rope, g1, g2, g3, obst, gender } = this.props
    let bgColor = gender.toUpperCase() === "M" ? "#cdf" :
                    gender.toUpperCase() === "F" ? "#fde" : "#fff"

    if(this.props.disableGenderColor){
      bgColor = "#fff"
    }

    return (
      <View style={{backgroundColor:bgColor}}>
        <TouchableOpacity onPress={() => {
          const rank = index
          return this.props.onPressPerson({bib: this.props.bib})
        }}>
          <View style={[LIST_STYLE.lineItem]}>
            <View style={[{flex:RANK_COLUMN}]}>
              <Text style={[LIST_STYLE.text, {textAlign:'center'}]}>{parseInt(index) + 1 + '.'}</Text>
            </View>
            <View style={{flex:NAME_COLUMN }}>
              <Text style={LIST_STYLE.text}>{name}</Text>
            </View>
            <View style={{flex:POINTS_COLUMN}}>
              <Text style={LIST_STYLE.text}>{score}</Text>
            </View>
            <View style={{flex:ROPE_COLUMN}}>
              <Text style={LIST_STYLE.text}>{rope}</Text>
            </View>
            <View style={{flex:G_COLUMN}}>
              <Text style={LIST_STYLE.text}>{g1}</Text>
            </View>
            <View style={{flex:G_COLUMN}}>
              <Text style={LIST_STYLE.text}>{g2}</Text>
            </View>
            <View style={{flex:G_COLUMN}}>
              <Text style={LIST_STYLE.text}>{g3}</Text>
            </View>
            <View style={{flex:OBST_COLUMN}}>
              <Text style={[LIST_STYLE.text]}>{obst}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


class IndividualTeamList extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={[GRAPH_HEADER_STYLE.headerBar]}>
          <View style={[{flex:RANK_COLUMN}]}>
            <Text style={[GRAPH_HEADER_STYLE.text, {textAlign:'center'}]}>Rank</Text>
          </View>
          <View style={{flex:NAME_COLUMN }}>
            <Text style={GRAPH_HEADER_STYLE.text}>Name</Text>
          </View>
          <View style={{flex:POINTS_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>Points</Text>
          </View>
          <View style={{flex:ROPE_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>Rope Cl.</Text>
          </View>
          <View style={{flex:G_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>G1</Text>
          </View>
          <View style={{flex:G_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>G2</Text>
          </View>
          <View style={{flex:G_COLUMN}}>
            <Text style={GRAPH_HEADER_STYLE.text}>G3</Text>
          </View>
          <View style={{flex:OBST_COLUMN}}>
            <Text style={[GRAPH_HEADER_STYLE.text]}>Obst.</Text>
          </View>
        </View>

        <FlatList
          data={this.props.teamData}
          renderItem = { ({item, index}) => {

            return <IndividualTeamItem
                      index={index}
                      bib={item.bibNo}
                      name={item.firstName + ' ' + item.lastName}
                      score={Math.round(item.score)}
                      rope={float100(item.tiebreaker)}
                      g1={item.g1} g2={item.g2} g3={item.g3}
                      obst={item.obstaclesCompleted}
                      onCourse={item.onCourse}
                      gender={item.gender}
                      disableGenderColor={this.props.disableGenderColor}
                      onPressPerson={(personObj) => this.props.onPressPerson(personObj)}
                  />
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
    marginBottom:25,
  }
})
export default IndividualTeamList
