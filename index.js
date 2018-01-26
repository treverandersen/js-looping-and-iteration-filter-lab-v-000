// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(function(name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, letter) {
  return arr.filter(function(name) {
    return name.match(/^[a-zA-Z]/i) === letter.match(/^[a-zA-Z]/i)
  })
}

function matchName(arr, str) {
  return arr.filter(function(name) {
    return arr.name.toLowerCase() === arr.str.toLowerCase()
  })
}
