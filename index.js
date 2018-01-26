// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(function(name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, l) {
  return arr.filter(function(name) {
    return l === name.match(/\b[a-zA-Z]/i)
  })
}

function matchName(arr, str) {
  return arr.filter(function(name) {
    return arr.name.toLowerCase() === arr.str.toLowerCase()
  })
}
