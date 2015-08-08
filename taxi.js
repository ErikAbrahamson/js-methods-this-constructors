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
  if (this.passengers.length < this.maxNumberOfPassengers) {
    return false;
  } else {
    return true;
  }
};

Taxi.prototype.dropOffPassengers = function() {
  for (var i = this.passengers.length; i > 0; i--) {
    this.passengers.pop(i);
  }
  return this.passengers;
};

module.exports = Taxi;
