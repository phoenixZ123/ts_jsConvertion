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

type userKeys = "name" | "age" | "email" | "role";

type UserOne = {
  [keys in userKeys]: string;
};

const Emp: UserOne = {
  name: "John",
  age: "25",
  email: "john@gmail.com",
  role: "senior",
};

const indentity = <strg>(value: strg): strg => {
  return value;
};
let str = indentity(12);
console.log(str);

type test = { id: number; name: string; age: number };

const identity = <T>(value: T): T => {
  return value;
};

const ppw: test = {
  id: 1,
  name: "test",
  age: 23,
};
console.log(identity(ppw));

const resultRes = <T>(data: T): { success: Boolean; data: T } => {
  return {
    success: true,
    data: data,
  };
};

console.log(resultRes("Khin phyu phyu kyAW"));

type resResponse<T> = {
  data: T;
  success: boolean;
};
const result: resResponse<number> = {
  data: 10,
  success: true,
};
console.log(typeof result);

type data = {
  id: number;
  name: string | number;
};
const responseData = JSON.parse('{"id":2,"name":"ppw"}');

const resPonse = responseData as data;

console.log(resPonse);

const user2 = {
  id: 20,
  name: "KPPK",
} satisfies data;
const user3 = {
  id: 22,
  age: 12,
} satisfies data;
console.log(user2);

type user = {
  id: number;
  name: string;
  about: string;
  add: string;
};
type userSummary = Pick<user, "id" | "name">;

type partialUser = {
  id?: number;
  name?: string;
  about?: string;
  add?: string;
};
type retrieveType = Omit<partialUser, "id" | "name">;
const partialOmit: retrieveType = {
  about: "erer",
  add: "ygn",
};
type newRequired = Required<partialUser>;

const requiredData: newRequired = {
  id: 4,
  name: "kkp",
  about: "wre",
  add: "efee",
};
console.log(partialOmit);
console.log(requiredData);

// Record method is write in <ValueName,type>

type record = Record<"id" | "name", string>;
const recordData: record = {
  id: "23",
  name: "ppw",
};
console.log(recordData);

type Student = {
  name: string;
  class: string;
};
type Teacher = {
  name: string;
  class: string;
};
const stuData: Student = {
  name: "student",
  class: "sec",
};
const teaData: Teacher = {
  name: "teacher",
  class: "english",
};

const Attend = (user: Teacher | Student): string | undefined => {
  switch (user.name) {
    case "student":
      return user.class;
    case "teacher":
      return user.class;

    default:
      return undefined;
  }
};
console.log("class = " + Attend(teaData));
