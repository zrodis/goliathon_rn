
import { StyleSheet, Text, View } from "react-native";


const BUTTON_COLOR = '#55c'
const G1_COLOR = '#009900'
const G2_COLOR = '#b38600'
const G3_COLOR = '#004466'

const GRAPH_HEADER_STYLE = StyleSheet.create({
  headerBar:{
    // flex:1,
    flexDirection: 'row',
    backgroundColor:'#55c',
    paddingVertical:4,
  },
  text:{
    fontWeight:'bold',
    fontSize:16,
    color: '#fff',

  }
})

const LIST_STYLE = StyleSheet.create({
  lineItem:{
    flexDirection:'row',
    paddingVertical:4,
    // marginVertical:4,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    borderStyle:'solid',
  },
  text:{

    fontSize:18,
    color: '#111',

  }
})

export {
  BUTTON_COLOR,
  GRAPH_HEADER_STYLE,
  LIST_STYLE,
  G1_COLOR,
  G2_COLOR,
  G3_COLOR,
}
