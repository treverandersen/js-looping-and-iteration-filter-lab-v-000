// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(function(name) {
    return name.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, l) {
  return arr.filter(function(name) {
    return name.match(/\b/i) === l.match(/\b/i)
  })
}
