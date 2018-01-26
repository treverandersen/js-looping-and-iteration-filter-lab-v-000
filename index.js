// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(function(name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, str) {
  return arr.filter(function(letter) {
    return letter.toLowerCase().match() === str.toLowerCase().match()
  })
}
