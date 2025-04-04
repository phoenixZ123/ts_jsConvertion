"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (a, b) {
    return a + b;
};
exports.default = add;
var person = {
    age: 25,
    name: "novem",
    isAdmin: true,
};
console.log(person);
var type = 25;
console.log(type + " type is " + typeof type);
var personOne = {
    name: "austin",
    age: 35,
    isStatus: "active",
};
console.log(personOne);
var color = [233, 0, 0];
var redColor = [255, 0, 0];
var red = redColor[0], green = redColor[1], blue = redColor[2];
console.log(red);
var Input = ["novem", true, 25];
var s = Input[0], b = Input[1], n = Input[2];
console.log(s);
var InputUser = function (firstname, lastname) {
    return firstname + " " + lastname;
};
console.log(InputUser("novem", "Wai"));
var Add = function (a, b) {
    return a + b;
};
console.log(Add(2, 3));
