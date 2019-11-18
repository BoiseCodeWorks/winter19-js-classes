
let car

let yourCar = {
  make: "Subaru",
  model: "Forester",
  year: 2017,
  color: "Blue"
}

class Car {
  constructor(make, model, year, color, sound = "Engine Starting Sounds") {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.miles = 0
    this.sound = sound
  }

  drive(milesDriven) {
    this.miles += milesDriven
    console.log(this.miles)
  }

  start() {
    console.log(this.sound)
  }

}



let newCar = new Car("Chevy", "Tracker", 1989, "Olive Drab", "VROOM")
car = new Car("Chevy", "Tracker", 1989, "Olive Drab", "WOOSH")
console.log(car)
console.log(newCar)