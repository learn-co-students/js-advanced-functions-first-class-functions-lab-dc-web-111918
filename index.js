// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (numberMultiply) {
  return function(value) {
    return numberMultiply * value;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(driversArray, returnDrivers) {
  return returnDrivers(driversArray);
}
