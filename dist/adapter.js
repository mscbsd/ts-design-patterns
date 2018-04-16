"use strict";
var Iphone8 = /** @class */ (function () {
    function Iphone8() {
    }
    Iphone8.prototype.useLightning = function () {
        console.log('Using lightning port...');
    };
    return Iphone8;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('Using micro usb...');
    };
    return GooglePixel;
}());
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log('Want to use micro USB, converting to Lightning...');
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
var iphone = new Iphone8();
var adapter = new LightningToMicroUSBAdapter(iphone);
adapter.useMicroUSB();
//# sourceMappingURL=adapter.js.map