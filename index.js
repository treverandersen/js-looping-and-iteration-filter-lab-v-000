// Code your solution in this file
function findMatching(arr, str) {
  var newArr = arr.filter(function(name) {
    //debugger;
    return name.toLowerCase() === str
  })
  console.log(newArr);
}
