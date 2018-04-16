interface Subject {
  registerObserver(o: Observer): any;
  removeObserver(o :Observer): any;
  notifyObservers(): any;
}
interface Observer {
  update(temperature: number): any;
}

class WeatherStation implements Subject {

  private temperature!: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log(`WeatherStation: new temperature measurement: ${temp}`);
    this.temperature = temp;
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index);
  }
  notifyObservers() {
    for(let observer of this.observers) {
      observer.update(this.temperature);
      console.log(observer);
    }
  }

}
class TemperatureDisplay implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    console.log('TemperatureDisplay: I need to update my display.');
  }
}

class Fan implements Observer {
  private subject: Subject;
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    if(temperature > 25){
      console.log('Fan: its to hot here, turning  myself on...');
    } else {
      console.log('Fan: its nice and cool, turning  myself off...');
    }
  }
}

let weatherstation = new WeatherStation();
let display = new TemperatureDisplay(weatherstation);
let fan = new Fan(weatherstation);

weatherstation.setTemperature(20);
weatherstation.setTemperature(30);
