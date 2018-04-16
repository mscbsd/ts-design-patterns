"use strict";
var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log('BlurayPlayer on');
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('BlurayPlayer turnOff');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('BlurayPlayer play');
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('Amplifier on');
    };
    Amplifier.prototype.turnOff = function () {
        console.log('Amplifier turnOff');
    };
    Amplifier.prototype.setSource = function (source) { };
    Amplifier.prototype.setVolume = function (volume) { };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log('Lights dim');
    };
    return Lights;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('TV turnOn');
    };
    TV.prototype.turnOff = function () {
        console.log('TV turnOff');
    };
    return TV;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log('PopcornMaker turnOn');
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log('PopcornMaker turnOff');
    };
    PopcornMaker.prototype.pop = function () {
        console.log('PopcornMaker pop');
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(blurayplayer, amp, lights, tv, popcornmaker) {
        this.blurayplayer = blurayplayer;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornmaker = popcornmaker;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornmaker.turnOn();
        this.popcornmaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource('bluray');
        this.amp.setVolume(11);
        this.blurayplayer.on();
        this.blurayplayer.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornmaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.blurayplayer.turnOff();
    };
    return HomeTheaterFacade;
}());
var bluray = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
var popmaker = new PopcornMaker();
var hometheater = new HomeTheaterFacade(bluray, amp, lights, tv, popmaker);
hometheater.watchMovie();
hometheater.endMovie();
