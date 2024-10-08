// 100-evcar.js

import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Unique attribute for EVCar
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color); // Return instance of Car
  }
}

export default EVCar;
