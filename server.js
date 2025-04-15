// const add = (a: number, b: number) => {
//   return a + b;
// };
// export default add;
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
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid Argument");
}
var numberValue = add(10, 20);
var stringValue = add("novem", "wai");
console.log("Number addition = " + numberValue);
console.log("String addition = " + stringValue);
var people = {
    name: "ppw",
    age: 35,
};
console.log(people);
var employeeOne = {
    name: "Alice",
    age: 25,
    role: "Dev",
};
console.log(employeeOne);
var printFn = function (log) {
    console.log(log);
};
var noArray = [1, 2];
console.log(noArray);
var Developer = {
    name: "John",
    age: 25,
    role: "senior",
};
console.log(Developer.name + Developer.age + Developer.role);
var Stu = {
    id: 1,
    name: "Novem",
};
Stu.name = "Austin Wai";
console.log(Stu.name);
var userone = "age";
console.log(userone);
var appConfig = {
    name: "novem wai",
    dev: "junior",
};
var NextWorker = {
    name: "john derek",
    dev: "senior",
};
console.log(NextWorker);
var stu = {
    id: 1,
    name: "human",
    address: "Ygn",
};
console.log(stu);
var Emp = {
    name: "John",
    age: "25",
    email: "john@gmail.com",
    role: "senior",
};
var indentity = function (value) {
    return value;
};
var str = indentity(12);
console.log(str);
var identity = function (value) {
    return value;
};
var ppw = {
    id: 1,
    name: "test",
    age: 23,
};
console.log(identity(ppw));
var resultRes = function (data) {
    return {
        success: true,
        data: data,
    };
};
console.log(resultRes("Khin phyu phyu kyAW"));
var result = {
    data: 10,
    success: true,
};
console.log(typeof result);
var responseData = JSON.parse('{"id":2,"name":"ppw"}');
var resPonse = responseData;
console.log(resPonse);
var user2 = {
    id: 20,
    name: "KPPK",
};
var user3 = {
    id: 22,
    age: 12,
};
console.log(user2);
var partialOmit = {
    about: "erer",
    add: "ygn",
};
var requiredData = {
    id: 4,
    name: "kkp",
    about: "wre",
    add: "efee",
};
console.log(partialOmit);
console.log(requiredData);
var recordData = {
    id: "23",
    name: "ppw",
};
console.log(recordData);
var stuData = {
    name: "student",
    class: "sec",
};
var teaData = {
    name: "teacher",
    class: "english",
};
// const Attend = (user: Teacher | Student): string | undefined => {
//   switch (user.name) {
//     case "student":
//       return user.class;
//     case "teacher":
//       return user.class;
//     default:
//       return undefined;
//   }
// };
var Attend = function (user) {
    return user.name === "student";
};
var checkAttend = function (user) {
    if (Attend(user)) {
        return "Teacher class: ".concat(user.class);
    }
    else {
        // return `Student class: ${user.class}`;
    }
};
console.log(checkAttend(stuData)); // Student class: sec
console.log(checkAttend(teaData));
