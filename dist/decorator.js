"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
        this.description = "";
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model S';
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model X';
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
;
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var RearFacingSeats = /** @class */ (function (_super) {
    __extends(RearFacingSeats, _super);
    function RearFacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearFacingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    };
    RearFacingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 3500;
    };
    return RearFacingSeats;
}(CarOptions));
var tesla = new ModelS();
tesla = new RearFacingSeats(tesla);
tesla = new EnhancedAutoPilot(tesla);
console.log(tesla.cost());
console.log(tesla.getDescription());
//# sourceMappingURL=decorator.js.map