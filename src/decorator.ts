abstract class Car {
  public description: string = "";
  public getDescription(): string{
    return this.description;
  }
  abstract cost(): number;
}

class ModelS extends Car {
  description = 'Model S';
  cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  description = 'Model X';
  cost(): number {
    return 77000;
  }
}

abstract class CarOptions extends Car {
  decoratedCar!: Car;
  abstract getDescription(): string;
  abstract cost(): number;
};

class EnhancedAutoPilot extends CarOptions {
  constructor(car: Car){
    super();
    this.decoratedCar = car;
  }
  getDescription(): string {
    return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
  }
  cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  constructor(car: Car){
    super();
    this.decoratedCar = car;
  }
  getDescription(): string {
    return this.decoratedCar.getDescription() + ', Rear facing seats';
  }
  cost(): number {
    return this.decoratedCar.cost() + 3500;
  }
}

let tesla = new ModelS();
tesla = new RearFacingSeats(tesla);
tesla = new EnhancedAutoPilot(tesla);

console.log(tesla.cost());
console.log(tesla.getDescription());
