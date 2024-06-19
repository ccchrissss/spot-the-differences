function spot(s1,s2){
  
  let diffArr = []

  for (let i = 0; i < s1.length; i++) {
    
    if (s1[i] !== s2[i]) diffArr.push(i)
    
  }

  return diffArr
}


console.log(spot('sea shells', 'She shells'))


// parameters: s1, s2     // two strings of the same length
// return: diffArr    // an array noting the indices inwhich the strings differ. if they're identical return []
// e.g. spot('sea shells', 'She shells')
// results in [0, 1, 2]

// create an array called diffArr
// loop through both strings. 
// if current character of both strings do not equal each other add current index to diffArr
// end loop
// return diffArr