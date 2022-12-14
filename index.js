const returnFirstTwoDrivers = function(arr) {
  const newArr = [arr[0], arr[1]]
  return newArr
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  function multipy(fare) {
    return num * fare
  }
  return multipy
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
  return func(arr)
}