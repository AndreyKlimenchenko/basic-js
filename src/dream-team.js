const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = '';
  if(typeof members !== 'object') {
    return teamName = false;
  }
  if(!members) {
    return teamName = false;
  }
  
 if(members.length < 1 || !members.length){
   teamName = false;
   return teamName;
 } else {
     members.forEach(item => {
    if(typeof item !== 'string'){
      return;
    }
    return teamName = teamName + item.trim().substr(0, 1).toUpperCase();
  });
 }
  
  teamName = teamName ? teamName.split('').sort().join('') : false;
  return teamName;
};
