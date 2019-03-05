import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types'
import {G1_COLOR, G2_COLOR, G3_COLOR} from '../utils/styleConstants'
import IndividualTeamList from '../components/IndividualTeamList'
import {getSpecificTeam} from '../utils/resultsAPI'

class IndividualTeamScreen extends React.Component {

  state ={
    teamData:[]
  }

  getSpecificTeam = async () =>{
    const team = await getSpecificTeam(this.props.navigation.getParam('teamName'))

    this.setState({teamData: team.participantScores})
  }

  componentDidMount(){
    this.getSpecificTeam()
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.teamContainer}>
          <View style={[styles.column, {flex:2}]}>
            <View><Text style={styles.headerText}>{'Team Name'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('teamName')}</Text></View>
          </View>
          <View style={[styles.column, {flex:0.8}]}>
            <View><Text style={styles.headerText}>{'Rank'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('rank') + 1}</Text></View>
          </View>
          <View style={[styles.column, {flex:1}]} >
            <View><Text style={styles.headerText}>{'Score'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('score')}</Text></View>
          </View>
          <View style={[styles.column, {flex:0.5}]}>
            <View><Text style={[styles.headerText, {color:G1_COLOR}]}>{'G1'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('g1')}</Text></View>
          </View>
          <View style={[styles.column, {flex:0.5}]}>
            <View><Text style={[styles.headerText, {color:G2_COLOR}]}>{'G2'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('g2')}</Text></View>
          </View>
          <View style={[styles.column, {flex:0.5}]}>
            <View><Text style={[styles.headerText, {color:G3_COLOR}]}>{'G3'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('g3')}</Text></View>
          </View>
          <View style={[styles.column, {flex:1}]}>
            <View><Text style={styles.headerText}>{'Still on course'}</Text></View>
            <View><Text style={styles.infoText}>{this.props.navigation.getParam('onCourse')}</Text></View>
          </View>

        </View>
      <IndividualTeamList
        teamData ={this.state.teamData}

      />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  teamContainer:{
    // flex:1,
    flexDirection:'row',
    margin:5,
  },
  column:{

  },

  headerText:{
    fontSize: 12,
  },
  infoText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
})
export default IndividualTeamScreen
