function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (actvity = 'go to the office') {
   return `This Monday, I will ${actvity}.`
}

let wrapAdjective = function(style) {
    return function(adjective) {
      return `You are ${style}${adjective}${style}!`
    }
}