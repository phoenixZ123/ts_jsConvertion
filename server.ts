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
console.log("Number addition = " + numberValue);
console.log("String addition = " + stringValue);

type TypeA = { name: string };
type TypeB = { age: number };
type People = TypeA & TypeB;

const people: People = {
  name: "ppw",
  age: 35,
};
console.log(people);

interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  role: string;
}
const employeeOne: Employee = {
  name: "Alice",
  age: 25,
  role: "Dev",
};
console.log(employeeOne);

interface PrintFn {
  (str: string): void;
}
const printFn: PrintFn = (log) => {
  console.log(log);
};

type MyType = {
  readonly property: string;
};

let noArray: readonly number[] = [1, 2];
console.log(noArray);
type EmployeeType = {
  readonly name: string;
  readonly age: number;
  readonly role: string;
};
const Developer: EmployeeType = {
  name: "John",
  age: 25,
  role: "senior",
};
console.log(Developer.name + Developer.age + Developer.role);

type student = {
  readonly id: number;
  name: string;
};
const Stu = {
  id: 1,
  name: "Novem",
};
Stu.name = "Austin Wai";
console.log(Stu.name);

interface User {
  name: string;
  age: number;
}

const userone: keyof User = "age";
console.log(userone);

const appConfig = {
  name: "novem wai",
  dev: "junior",
};
type NextType = typeof appConfig;

const NextWorker: NextType = {
  name: "john derek",
  dev: "senior",
};
console.log(NextWorker);
type DoubleCheck = keyof typeof appConfig;

type index = {
  id: number;
};

type person = {
  name: string;
  address: string;
};
type Obj = index & person;
const stu: Obj = {
  id: 1,
  name: "human",
  address: "Ygn",
};
console.log(stu);

type userKeys = "name" | "age" | "email";

type UserOne = {
  [keys in userKeys]: string;
};

const Emp: UserOne = {
  name: "John",
  age: "25",
  email: "john@gmail.com",
};

const indentity = <T>(value: T): T => {
  return value;
};
let str = indentity("Hello");
console.log(str);
