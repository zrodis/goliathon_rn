const loadUrl = async (url, err='service') => {
  console.log(url);
  try{
    const response = await fetch(url)
    const result = await response.json()
    return result
  }catch(err){
    console.log('error getQualifyingTeams')
  }
}

const getQualifyingTeams = async () => {
  const url = 'http://www.goliathonresults.com/scoring?teamScores=true'
  return loadUrl(url, 'getQualifyingTeams')
}

const getSpecificTeam = async (teamName) => {
  const url = 'http://www.goliathonresults.com/scoring?onTeam=' + teamName
  return loadUrl(url, 'getSpecificTeam')
}

const getTop50 = async (gender) => {
  const url = 'http://www.goliathonresults.com/scoring?gender='+gender
  return loadUrl(url, 'getTop50 ' + gender)
}

const getRopeClimb = async () => {
  const url = 'http://www.goliathonresults.com/timing'
  return loadUrl(url, 'getRopeClimb')
}

const getPersonObst = async (bib) => {
  const url = 'http://www.goliathonresults.com/results/' + bib
  return loadUrl(url, 'getPersonObst')
}

const getPersonData = async (bib) => {
  const url = 'http://www.goliathonresults.com/scoring/?bibNo=' + bib
  return loadUrl(url, 'getPersonData')
}

export {
  getQualifyingTeams,
  getSpecificTeam,
  getTop50,
  getRopeClimb,
  getPersonObst,
  getPersonData

}
