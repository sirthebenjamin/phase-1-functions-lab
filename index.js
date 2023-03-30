function distanceFromHqInBlocks(streetNumber) {
    const hqStreetNumber = 42;
    return Math.abs(streetNumber - hqStreetNumber);
  }
  
  module.exports = {
    distanceFromHqInBlocks
  };

  
  function distanceFromHqInBlocks(streetNumber) {
    const hqStreetNumber = 42;
    return Math.abs(streetNumber - hqStreetNumber);
  }
  
  function distanceFromHqInFeet(streetNumber) {
    const distanceInBlocks = distanceFromHqInBlocks(streetNumber);
    return distanceInBlocks * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(start - end);
    return distanceInBlocks * 264;
  }
  
  function calculatesFarePrice(start, end) {
    const distanceInFeet = distanceTravelledInFeet(start, end);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
 






