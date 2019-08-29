/*
//Клас
function Car(carName) {
    this.carName = carName || 'Default Value';
};

Car.prototype.logName = function () {
    console.log('Car name is: ', this.carName)
};




module.exports = {
    Car: Car
};

//aбо
//module.exports.CarClass = Car;
// де var Car = require('./Car.js').CarClass;


//глобальний обєкт
global.Car = Car;
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Пакетний менеджер NPM

var lodash = require('lodash')

console.log('This is car class' , lodash.add(10,30))





