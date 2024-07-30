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

// let name = ["peter", "susan", 1];

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
// type Car = {
//   brand: string;
//   model: string;
//   doors: number;
// };

// // Définir le type Truck
// type Truck = {
//   brand: string;
//   model: string;
//   capacity: number;
// };

// // Définir le type union Vehicle
// type Vehicle = Car | Truck;

// // Fonction pour filtrer les véhicules
// function filterVehicles(vehicles: Vehicle[], type: "car" | "truck"): Vehicle[] {
//   if (type === "car") {
//     return vehicles.filter((vehicle): vehicle is Car => "doors" in vehicle);
//   } else if (type === "truck") {
//     return vehicles.filter(
//       (vehicle): vehicle is Truck => "capacity" in vehicle
//     );
//   } else {
//     return [];
//   }
// }

// // Exemple de données
// const vehicles: Vehicle[] = [
//   { brand: "Toyota", model: "Corolla", doors: 4 },
//   { brand: "Ford", model: "F-150", capacity: 3 },
//   { brand: "Honda", model: "Civic", doors: 4 },
//   { brand: "Volvo", model: "FH16", capacity: 25 },
// ];

// // Filtrer les voitures
// const cars = filterVehicles(vehicles, "car");
// console.log(cars);

// // Filtrer les camions
// const trucks = filterVehicles(vehicles, "truck");
// console.log(trucks);

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

// Exercice : Gestion des Animaux dans un Zoo
// Vous devez créer une fonction en TypeScript qui filtre les animaux en fonction de leur type. Le zoo a deux types d'animaux : des mammifères et des oiseaux.

// Créez deux types pour représenter les animaux :

// Mammal : Représente un mammifère avec un nom, une espèce, et un nombre de pattes.
// Bird : Représente un oiseau avec un nom, une espèce, et une envergure des ailes.
// Créez un type union Animal qui peut être soit un Mammal soit un Bird.

// Écrivez une fonction filterAnimals qui prend un tableau de Animal et un type (soit "mammal" soit "bird") et retourne un tableau contenant uniquement les animaux de ce type.

// Spécifications détaillées
// Le type Mammal doit avoir les propriétés name (string), species (string), et numLegs (number).
// Le type Bird doit avoir les propriétés name (string), species (string), et wingSpan (number).
// La fonction filterAnimals doit accepter un tableau de Animal et un string indiquant le type à filtrer ("mammal" ou "bird").
// Exemple de données
// typescript
// Copier le code
// const animals: Animal[] = [
//     { name: "Lion", species: "Panthera leo", numLegs: 4 },
//     { name: "Eagle", species: "Aquila chrysaetos", wingSpan: 2.3 },
//     { name: "Elephant", species: "Loxodonta", numLegs: 4 },
//     { name: "Penguin", species: "Aptenodytes forsteri", wingSpan: 1.2 }
// ];
// Objectif
// Écrire la fonction filterAnimals pour qu'elle filtre correctement les animaux en fonction du type spécifié.

// Instructions
// Définissez les types Mammal et Bird.
// Définissez le type union Animal.
// Implémentez la fonction filterAnimals.
// Quand tu auras terminé, partage ton code pour que je puisse le corriger. Bon courage !

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

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("John");

// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

let arrayOfnames: string[] = ["peter", "susan"];

function checkName(name: string): string | undefined {
  for (name in arrayOfnames) {
    if (name === "peter") {
      return name;
    }
    if (name === "susan") {
      return name;
    }
  }
}

const names: string[] = ["John", "Jane", "Jim", "Jill"];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = "Jane";
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list `);
}

// WORK WITH OPTIONAL PARAMETER
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// WORK WITH DEFAULT PARAMETER
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

// WORK WITH REST PARAMETER

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message} ${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result);

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello TypeScript");

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(param: string | number) {
  if (typeof param === "string") {
    console.log(param.toUpperCase());
  }
  if (typeof param === "number") {
    console.log(param * 2);
  }
}

processInput(10);
processInput("Hello");

type Car = {
  name: string;
  costPerKm: number;
  distance: number;
};

type Truck = {
  name: string;
  costPerKm: number;
  distance: number;
  additionalCostPerTonne: number;
};

type Vehicle = Car | Truck;

function calculateTotalCost(vehicles: Vehicle[]): Number {
  let totalCost = 0;

  vehicles.forEach((vehicle) => {
    if ("additionalCostPerTonne" in vehicle) {
      totalCost +=
        vehicle.costPerKm * vehicle.distance +
        vehicle.additionalCostPerTonne * vehicle.distance;
    } else {
      totalCost += vehicle.costPerKm * vehicle.distance;
    }
  });

  return totalCost;
}

const vehicles: Vehicle[] = [
  { name: "Car1", costPerKm: 0.5, distance: 100 },
  {
    name: "Truck1",
    costPerKm: 1.0,
    distance: 200,
    additionalCostPerTonne: 0.2,
  },
  { name: "Car2", costPerKm: 0.7, distance: 150 },
  {
    name: "Truck2",
    costPerKm: 1.2,
    distance: 300,
    additionalCostPerTonne: 0.3,
  },
];

const totalCost = calculateTotalCost(vehicles);
console.log("Total Cost:", totalCost);

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first);
console.log(second);

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: "anna",
};

createStudent(newStudent);
createStudent({ id: 1, name: "bob" });

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData("hello"));
console.log(processData(4));
console.log(processData("it's a string", { reverse: true }));

function handleData(
  data: number[] | string[],
  options: { double: boolean } = { double: false }
): string[] | number[] {
  if (typeof data[0] === "number") {
    return (data as number[]).map((d) => d * 2);
  } else if (typeof data[0] === "string") {
    return options.double
      ? (data as string[]).map((d) => d.repeat(2).toLowerCase())
      : (data as string[]).map((d) => d.toLowerCase());
  } else {
    return [];
  }
}

// Exemple de données
const numbers = [1, 2, 3];
const strings = ["HELLO", "WORLD"];

// Test des cas d'utilisation
console.log(handleData(numbers)); // Output: [2, 4, 6]
console.log(handleData(strings)); // Output: ["hello", "world"]
console.log(handleData(strings, { double: true }));

type UserAccount = {
  id: string;
  name: string;
  email: string;
};

type AdminAccount = {
  id: string;
  name: string;
  accessLevel: number;
};

type Account = UserAccount | AdminAccount;

function processAccounts(
  account: Account[],
  config: { anonymize: boolean } = { anonymize: false }
): Array<
  (UserAccount & { isAdmin: false }) | (AdminAccount & { isAdmin: true })
> {
  return account.map((account) => {
    if ("email" in account) {
      return {
        ...account,
        name: config.anonymize ? "Anonymous" : account.name.toUpperCase(),
        isAdmin: false,
      };
    } else if ("accessLevel" in account) {
      return {
        ...account,
        name: config.anonymize ? "Anonymous" : account.name.toUpperCase(),
        isAdmin: true,
      };
    } else {
      throw new Error("Type de compte inconnu");
    }
  });
}

const accounts: Account[] = [
  { id: "U1", name: "Alice", email: "alice@example.com" },
  { id: "A1", name: "Bob", accessLevel: 5 },
  { id: "U2", name: "Charlie", email: "charlie@example.com" },
  { id: "A2", name: "Dave", accessLevel: 10 },
];

// Test des cas d'utilisation
console.log(processAccounts(accounts)); // Output avec noms en majuscules et isAdmin ajouté
console.log(processAccounts(accounts, { anonymize: true })); //
