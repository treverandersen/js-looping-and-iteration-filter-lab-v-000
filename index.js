// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter(function(name) {
    //debugger;
    return name.toLowerCase() === str
  })
   
}
