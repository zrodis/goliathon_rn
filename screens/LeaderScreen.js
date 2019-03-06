import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PropTypes from 'prop-types'
import PlaceHolder from '../components/PlaceHolder'
import LeadersButtonSwitch from '../components/LeadersButtonSwitch'
import QualifyingTeams from '../components/QualifyingTeams'
import IndividualTeamList from '../components/IndividualTeamList'

import {getQualifyingTeams, getTop50, getRopeClimb} from '../utils/resultsAPI'

class LeaderScreen extends React.Component {
  static navigationOptions = {
    title: "Leaders"
  }
  state={
    category: 'Qualifying Teams',
    qualifyingTeamsData:[],
    top50Male:[],
    top50Female:[],
    ropeData:[],
  }

  handleCategorySwitch = async (title) => {
    console.log('handleCategorySwitch', title)
    this.setState({category: title})
    switch(title){
      case "Qualifying Teams":
        this.getQualifyingTeams()
      break;
      case "Top 50 Males":
        this.getTop50Male()
      break;
      case "Top 50 Females":
        this.getTop50Female()
      break;
      case "Rope Climb":
        this.getRopeClimb()
      break;
    }
  }

  getQualifyingTeams = async () => {
    console.log('getQualifyingTeams');
    const data = await getQualifyingTeams()
    this.setState({
      qualifyingTeamsData: [ ...data.teamScores ]
    })
  }

  getTop50Male = async () => {
    console.log('getTop50Male');
    const data = await getTop50('M')
    this.setState({
      top50Male: [ ...data.participantScores ]
    })
  }

  getTop50Female = async () => {
    const data = await getTop50('F')
    this.setState({
      top50Female: [ ...data.participantScores ]
    })
  }
  getRopeClimb = async () => {
    const data = await getRopeClimb()
    this.setState({
      ropeData: [ ...data.participants ]
    })
  }

  navigateToIndividualTeam = ({rank, teamName, g1, g2, g3, score, onCourse, onPressPerson}) => {
    this.props.navigation.navigate('IndividualTeam', {
      rank, teamName, g1, g2, g3, score, onCourse, onPressPerson
    })
  }

  navigateToPerson = (data) => {
    this.props.navigation.navigate('PersonData', {
      bib: data.bib
    })
  }

  componentDidMount() {
    this.getQualifyingTeams()
  }

  componentdidUpdate(prevProps, prevState){
    if(this.state.category !== prevState.category){

    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.switchCategoryButton}>
          <LeadersButtonSwitch
            title="Qualifying Teams"
            selected={this.state.category === "Qualifying Teams"}
            onPress={(title) => this.handleCategorySwitch(title)}
          />
          <LeadersButtonSwitch
            title="Top 50 Males"
            selected={this.state.category === "Top 50 Males"}
            onPress={(title) => this.handleCategorySwitch(title)}
          />
          <LeadersButtonSwitch
            title="Top 50 Females"
            selected={this.state.category === "Top 50 Females"}
            onPress={(title) => this.handleCategorySwitch(title)}
          />
          <LeadersButtonSwitch
            title="Rope Climb"
            selected={this.state.category === "Rope Climb"}
            onPress={(title) => this.handleCategorySwitch(title)}
          />
        </View>


        <View style={styles.listContainer}>
          { this.state.category === "Qualifying Teams" ?
            <QualifyingTeams
              qualifyingTeamsData={this.state.qualifyingTeamsData}
              onPressTeam = {(teamObj) => this.navigateToIndividualTeam(teamObj)}
              onPressPerson = {(personObj) => this.navigateToPerson(personObj)}
              />
          :

           this.state.category === "Top 50 Males" ?
          <View>
            <IndividualTeamList
              teamData ={this.state.top50Male}
              disableGenderColor={true}
              onPressPerson = {(personObj) => this.navigateToPerson(personObj)}

            />

          </View>

          :
           this.state.category === "Top 50 Females" ?
           <View>
             <IndividualTeamList
               teamData ={this.state.top50Female}
               disableGenderColor={true}
               onPressPerson = {(personObj) => this.navigateToPerson(personObj)}
              />
           </View>
          :
           this.state.category === "Rope Climb" ?
           <View>
             <IndividualTeamList
               teamData ={this.state.ropeData}
               onPressPerson = {(personObj) => this.navigateToPerson(personObj)}

            />
           </View>
          : null
          }
        </View>

        <View style={{height:30}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
 header:{
   flex: 1,
   fontSize:20,
   textAlign:'center',
   paddingTop: 5,
 },
 switchCategoryButton:{
   flex: 2,
   flexDirection: 'row',
   justifyContent: 'center',
   marginVertical: 5,
 },
 listContainer:{
   flex:8,
   alignSelf:'stretch',
 },
 qualifyingTeamList:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#222',
  },
})

export default LeaderScreen
