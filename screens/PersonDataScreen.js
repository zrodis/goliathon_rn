import React, {Fragment} from "react";
import { StyleSheet, Text, View } from "react-native";
import {getPersonObst, getPersonData} from '../utils/resultsAPI'
import {G1_COLOR, G2_COLOR, G3_COLOR,} from '../utils/styleConstants'
import {float100} from '../utils/mathHelper'

import ObstacleChart from '../components/ObstacleChart'

class PersonDataScreen extends React.Component {
  state = {
    obstData:[],
    personData:{}
  }

  getObstacles = async () => {
    const data = await getPersonObst(this.props.navigation.getParam('bib'))
    this.setState({
      obstData: [ ...data.participantResults ]
    })
  }
  getPerson = async () => {
    const data = await getPersonData(this.props.navigation.getParam('bib'))
    console.log(data, 'PERSONs');
    this.setState({
      personData: data.participantScores[0]
    })
  }

  getGender = (str) => {
   return str === 'M' ?  'Males' :
          str === 'F' ?  'Females' : "Gender"
  }

  componentDidMount(){
    this.getObstacles()
    this.getPerson()
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.navigation.getParam('bib') !== prevProps.navigation.getParam('bib')){
      this.getObstacles()
      this.getPerson()
    }
  }

  render(){
    const {personData, obstData} = this.state

    return(
      <View style={styles.container}>

        <View style={styles.personDataContainer}>
          { personData.firstName &&

          <Fragment>
            <View style={styles.pointsAndNameContainer}>
              <View style={styles.pointsContainer}>
                <Text style={styles.pointsText1}>{Math.round(personData.score)}</Text>
                <Text  style={styles.pointsText2}>{'Points'}</Text>

              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{personData.firstName + ' ' + personData.lastName}</Text>
                <Text style={styles.teamText}>{'Team: ' +personData.teamID}</Text>

              </View>
            </View>

            <View style={styles.gContainer}>
              <Text style={styles.gDataText}>
                <Text style={[{color:G1_COLOR}]}>{`G1: ${personData.g1}  `}</Text>
                <Text style={[{color:G2_COLOR}]}>{`G2: ${personData.g2}  `}</Text>
                <Text style={[{color:G3_COLOR}]}>{`G3: ${personData.g3}`}</Text>
              </Text>
            </View>
            <View style={styles.rankingContainer}>
              <Text style={styles.rankDataText}>{`Overall Rank: ${personData.rank}/${personData.rankCount}`}</Text>
              <Text style={styles.rankDataText}>{`Rank among ${this.getGender(personData.gender)}: ${personData.sexRank}/${personData.sexRankCount}`}</Text>
              <Text style={styles.rankDataText}>{`Rank in Group: ${personData.groupRank}/${personData.groupRankCount}`}</Text>
              <Text style={styles.rankDataText}></Text>
              <Text style={styles.rankDataText}>{`50' Rope Climb: ${personData.tiebreaker < 900 ? float100(personData.tiebreaker) : '- -'}`}</Text>

            </View>
          </Fragment>
        }
        </View>
        <View style={styles.obstacleDataContainer}>
          <ObstacleChart obstData={this.state.obstData}/>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
  personDataContainer:{
    flexDirection:'column',
    flex:1,
    // backgroundColor:'#eee',//lt grey
    padding:5,
  },
  obstacleDataContainer:{
    flex:1,
  },


//
  pointsAndNameContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    // justifyContent: 'space-around',
    // backgroundColor:"#ddf",//blue

  },
  pointsContainer:{
    flex: 2,
    // backgroundColor:"#dfd",//green
  },
  nameContainer:{
    flex: 3,
    // backgroundColor:"#fdd",//pink
  },

  gContainer:{
    // backgroundColor:"#fdf",//blue
    alignItems:'center',
    justifyContent: 'space-around',
    flex:1,
  },
  rankingContainer:{
    // backgroundColor:"#777",//dark grey

    flex:2,
  },


  nameText:{
    color:"#111",
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  teamText:{
    color:"#555",
    fontSize: 16,
    textAlign: 'center',
  },
  pointsText1:{
    color:"#800080",
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pointsText2:{
    color:"#800080",
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rankDataText:{
    fontSize: 18,
  },
  gDataText:{
    fontSize:24,
  }
})
export default PersonDataScreen
