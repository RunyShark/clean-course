export abstract class Vehicle {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  getNumberOfSeats(): number {
    throw new Error("Method not implemented.");
  }
  constructor(private numberOfSeats: number) {
    super();
  }
}

export class Audi extends Vehicle {
  getNumberOfSeats(): number {
    throw new Error("Method not implemented.");
  }
  constructor(private numberOfSeats: number) {
    super();
  }
}

export class Toyota extends Vehicle {
  getNumberOfSeats(): number {
    throw new Error("Method not implemented.");
  }
  constructor(private numberOfSeats: number) {
    super();
  }
}

export class Honda extends Vehicle {
  getNumberOfSeats(): number {
    throw new Error("Method not implemented.");
  }
  constructor(private numberOfSeats: number) {
    super();
  }
}
