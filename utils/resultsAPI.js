const getQualifyingTeams = async () => {
  const url = 'http://www.goliathonresults.com/scoring?teamScores=true'
  try{
    const response = await fetch(url)
    const result = await response.json()
    return result
  }catch(err){
    console.log('error getQualifyingTeams')
  }
}

const getSpecificTeam = async (teamName) => {
  const url = 'http://www.goliathonresults.com/scoring?onTeam=' + teamName
  try{
    const response = await fetch(url)
    const result = await response.json()
    return result
  }catch(err){
    console.log('error getSpecificTeam', teamName)
  }
}


const getTop50 = async (gender) => {
  const url = 'http://www.goliathonresults.com/scoring?gender='+gender
  try{
    const response = await fetch(url)
    const result = await response.json()
    return result
  }catch(err){
    console.log('error getTop50', gender)
  }
}
const getRopeClimb = async () => {
  const url = 'http://www.goliathonresults.com/timing'
  try{
    const response = await fetch(url)
    const result = await response.json()
    return result
  }catch(err){
    console.log('error getRopeClimb')
  }
}


export {
  getQualifyingTeams,
  getSpecificTeam,
  getTop50,
  getRopeClimb,

}
