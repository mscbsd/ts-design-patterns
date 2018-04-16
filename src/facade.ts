class BlurayPlayer {
  on(){
    console.log('BlurayPlayer on');
  }
  turnOff(){
    console.log('BlurayPlayer turnOff');
  }
  play(){
    console.log('BlurayPlayer play');
  }
}

class Amplifier {
  on(){
    console.log('Amplifier on');
  }
  turnOff(){
    console.log('Amplifier turnOff');
  }
  setSource(source: string) { }
  setVolume(volume: number) { }
}

class Lights {
  dim(){
    console.log('Lights dim');
  }
}

class TV {
  turnOn(){
    console.log('TV turnOn');
  }
  turnOff(){
    console.log('TV turnOff');
  }
}

class PopcornMaker {
  turnOn() {
    console.log('PopcornMaker turnOn');
  }
  turnOff() {
    console.log('PopcornMaker turnOff');
  }
  pop() {
    console.log('PopcornMaker pop');
  }
}


class HomeTheaterFacade {
  private blurayplayer!: BlurayPlayer;
  private amp!: Amplifier;
  private lights!: Lights;
  private tv!: TV;
  private popcornmaker!: PopcornMaker;

  constructor(blurayplayer:BlurayPlayer, amp: Amplifier, lights: Lights, tv:TV, popcornmaker: PopcornMaker){
    this.blurayplayer = blurayplayer;
    this.amp = amp;
    this.lights = lights;
    this.tv = tv;
    this.popcornmaker = popcornmaker;
  }

  watchMovie(){
    this.popcornmaker.turnOn();
    this.popcornmaker.pop();

    this.lights.dim();

    this.tv.turnOn();

    this.amp.on();
    this.amp.setSource('bluray');
    this.amp.setVolume(11);

    this.blurayplayer.on();
    this.blurayplayer.play();
  }

  endMovie(){
    this.popcornmaker.turnOff();
    this.amp.turnOff();
    this.tv.turnOff();
    this.blurayplayer.turnOff();
  }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popmaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(bluray, amp, lights, tv, popmaker);
hometheater.watchMovie();
hometheater.endMovie();
