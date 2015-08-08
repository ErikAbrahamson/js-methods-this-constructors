function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(
  passengerName) {
  this.passengerName = passengerName;
  this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function() {
  return this.passengers.length;
};

Taxi.prototype.full = function() {
  if (this.passengers.length - 1 > this.maxNumberOfPassengers) {
    return false;
  } else {
    return true;
  }
};





module.exports = Taxi;
