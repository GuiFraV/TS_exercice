let awesomeName: string = "shakeAndBake";

awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20;

let amount: number = 20;
amount = 12 - 1;
// amount = "pants";

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "shakeAndBake";

// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference

let test: string = "hello world";
test.toLocaleLowerCase();
console.log(test);

let maath: number = 6;
maath += 7;
console.log(maath);

let sd: boolean = true;
sd = false;
console.log(sd);

let greetings: string = "Hello, everybody";
greetings.toUpperCase();

let age: number = 25;
age = age + 5;

let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);

// greetings = 10;
// age = "thirty";
// isAdult = "yes";

console.log(greetings, age, isAdult);

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = "random";

let notSure: any = 4;
notSure = "Maybe a string instead";
notSure = false;

let random;

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;
    break;
  }
}

console.log(foundBook?.length);

// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

let discount: number | string = 20;
discount = "20%";
