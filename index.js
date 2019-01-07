const returnFirstTwoDrivers = function(driversArray) {
  return [driversArray[0], driversArray[1]];
}

const returnLastTwoDrivers = function(driversArray) {
  const lastTwo = driversArray.slice(driversArray.length-2)
  return [lastTwo[0], lastTwo[1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value) {
  return function fare(times) {
    return value*times;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(driversArray, func) {
  return func(driversArray);
}


// fetchSpecifiedDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, fetchSpecifiedDrivers() will return either the first two drivers or the last two drivers.
