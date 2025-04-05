// const add = (a: number, b: number) => {
//   return a + b;
// };
// export default add;

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

type colorTuple = [number, number, number];

const color: colorTuple = [233, 0, 0];

const redColor: colorTuple = [255, 0, 0];

const [red, green, blue] = redColor;
console.log(red);

type InputType = [str: string, Boo: boolean, num: number];

const Input: InputType = ["novem", true, 25];

const [s, b, n] = Input;
console.log(s);

const InputUser = (firstname: string, lastname: string) => {
  return firstname + " " + lastname;
};
console.log(InputUser("novem", "Wai"));

type Func = (a: number, b: number) => number;

// const Add:Func=(a,b)=>{
//   return a+b;
// }
// console.log(Add(2,3));

// function add(a:number|string,b:number|string){
// return a+" "+b;
// }
// console.log(add(10,20));

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid Argument");
}
const numberValue = add(10, 20);
const stringValue = add("novem", "wai");
console.log("Number addition = "+numberValue);
console.log("String addition = "+stringValue);