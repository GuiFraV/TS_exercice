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

let prices: number[] = [100.75, 42];
// prices.push("hello");

let fruits: string[] = ["apple", "orange"];

// let randomValues: [] = ["hello"];
let emptyValues: number[] = [];

let names = ["peter", "susan", 1];

let array: (string | boolean)[] = ["apple", true, "orange", false];

// // Définir le type Developer
// type Developer = {
//   name: string;
//   favoriteLanguage: string;
//   yearsExperience: number;
// };

// // Définir le type Designer
// type Designer = {
//   name: string;
//   favoriteTool: string;
//   portfolioUrl: string;
// };

// // Définir le type union Employee
// type Employee = Developer | Designer;

// // Fonction pour filtrer les employés
// function filterEmployees(
//   employees: Employee[],
//   type: "developer" | "designer"
// ): Employee[] {
//   if (type === "developer") {
//     return employees.filter((employee) => "favoriteLanguage" in employee);
//   } else if (type === "designer") {
//     return employees.filter((employee) => "favoriteTool" in employee);
//   } else {
//     return [];
//   }
// }

// // Exemple de données
// const employees: Employee[] = [
//   { name: "Alice", favoriteLanguage: "TypeScript", yearsExperience: 5 },
//   {
//     name: "Bob",
//     favoriteTool: "Photoshop",
//     portfolioUrl: "http://bobdesign.com",
//   },
//   { name: "Charlie", favoriteLanguage: "Python", yearsExperience: 3 },
//   {
//     name: "Dana",
//     favoriteTool: "Sketch",
//     portfolioUrl: "http://danadesign.com",
//   },
// ];

// // Filtrer les développeurs
// const developers = filterEmployees(employees, "developer");
// console.log("Developers:", developers);

// // Filtrer les designers
// const designers = filterEmployees(employees, "designer");
// console.log("Designers:", designers);

// Définir le type Car
type Car = {
  brand: string;
  model: string;
  doors: number;
};

// Définir le type Truck
type Truck = {
  brand: string;
  model: string;
  capacity: number;
};

// Définir le type union Vehicle
type Vehicle = Car | Truck;

// Fonction pour filtrer les véhicules
function filterVehicles(vehicles: Vehicle[], type: "car" | "truck"): Vehicle[] {
  if (type === "car") {
    return vehicles.filter((vehicle): vehicle is Car => "doors" in vehicle);
  } else if (type === "truck") {
    return vehicles.filter(
      (vehicle): vehicle is Truck => "capacity" in vehicle
    );
  } else {
    return [];
  }
}

// Exemple de données
const vehicles: Vehicle[] = [
  { brand: "Toyota", model: "Corolla", doors: 4 },
  { brand: "Ford", model: "F-150", capacity: 3 },
  { brand: "Honda", model: "Civic", doors: 4 },
  { brand: "Volvo", model: "FH16", capacity: 25 },
];

// Filtrer les voitures
const cars = filterVehicles(vehicles, "car");
console.log(cars);

// Filtrer les camions
const trucks = filterVehicles(vehicles, "truck");
console.log(trucks);

type Engineer = {
  name: string;
  expertise: string;
  yearsExperience: number;
};

type Manager = {
  name: string;
  department: string;
  employeesSupervised: number;
};

type Employee = Manager | Engineer;

function filterEmployees(
  employee: Employee[],
  type: "engineer" | "manager"
): Employee[] {
  if (type === "engineer") {
    return employee.filter((employee) => "expertise" in employee);
  } else if (type === "manager") {
    return employee.filter((employee) => "department" in employee);
  } else {
    return [];
  }
}

const employees: Employee[] = [
  { name: "Alice", expertise: "Software Engineering", yearsExperience: 5 },
  { name: "Bob", department: "Sales", employeesSupervised: 10 },
  { name: "Charlie", expertise: "Mechanical Engineering", yearsExperience: 3 },
  { name: "Dana", department: "Marketing", employeesSupervised: 8 },
];

const engineers = filterEmployees(employees, "engineer");
console.log("engineer: ", engineers);

const managers = filterEmployees(employees, "manager");
console.log("employees ", managers);

type Mammal = {
  name: string;
  species: string;
  numLegs: number;
};

type Bird = {
  name: string;
  species: string;
  wingSpan: number;
};

type Animal = Mammal | Bird;

function filterAnimals(animal: Animal[], type: "mammal" | "bird"): Animal[] {
  if (type === "mammal") {
    return animal.filter((animal) => "numLegs" in animal);
  } else if (type === "bird") {
    return animal.filter((animal) => "wingSpan" in animal);
  } else {
    return [];
  }
}

const animals: Animal[] = [
  { name: "Lion", species: "Panthera leo", numLegs: 4 },
  { name: "Eagle", species: "Aquila chrysaetos", wingSpan: 2.3 },
  { name: "Elephant", species: "Loxodonta", numLegs: 4 },
  { name: "Penguin", species: "Aptenodytes forsteri", wingSpan: 1.2 },
];

const mammal = filterAnimals(animals, "mammal");
console.log("mammal", mammal);

const bird = filterAnimals(animals, "bird");
console.log("bird", bird);

let temperatures: number[] = [20, 25, 30];
// temperatures.push("hot");

let colors: string[] = ["red", "green", "blue"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", 3];

let car: { brand: string; year: number; color: string } = {
  brand: "toyota",
  year: 2020,
  color: "red",
};

car.brand = "ford";
car.color = "blue";

let car1: { brand: string; year: number } = {
  brand: "audi",
  year: 2020,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
// bike.year = "old";
let laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: "HP" };

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants" };
let product: { title: string; price?: number }[] = [product1, product2];
