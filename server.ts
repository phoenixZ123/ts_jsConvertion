const add = (a: number, b: number) => {
  return a + b;
};
export default add;

const person: {
  age: number;
  name: string;
  isAdmin: boolean;
} = {
  age: 25,
  name: "novem",
  isAdmin: true,
};
console.log(person);

const type: string | number = 25;

console.log(type + " type is " + typeof type);

type personType = {
  name: string;
  age: number;
  isStatus: "active" | "unactive";
};

const personOne: personType = {
  name: "austin",
  age: 35,
  isStatus: "active",
};
console.log(personOne);

type colorTuple=[number,number,number];

const color:colorTuple=[233,0,0];

const redColor:colorTuple=[255,0,0];

const [red,green,blue]=redColor;
console.log(red);
