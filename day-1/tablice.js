const nameList = ["Ludomir", "Żyrosław", "Gniewomir", "Myślimir"];

const cityList = [];
cityList[0] = 'Konin';
cityList[1] = 'Zabrze';

console.log(cityList.length);

// const items = [];
const gameItems = new Array();

const colors = new Array("red", "blue");
colors[2] = "green";

console.log(colors);

const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "Pierwszy const";
myArrayLet[0] = "Pierwszy let";

// myArrayConst = "coś innego1";
// myArrayLet = "coś innego2";

const popularName = nameList[2];

// nameList[3] = "Witomysł";
// nameList[2] === "Gniewomir";

// nameList[5] = "Nowe imię";

delete nameList[2];
typeof nameList[2];

const cities = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa"];
cities.length;

const users = ["Adam", "Ania"];
users.length;
console.log(users);

const longArray = [];
longArray.length = 100;

console.log(cities[cities.length - 1]);

cities[cities.length] = "Tokio";
cities[cities.length] = "Pekin";

cities.length += 2;
cities.length = 3;

users.length = 0;
console.log(users);

console.log(cities);

typeof users;
cities instanceof String;
cities instanceof Array;
cities instanceof Object;
cities instanceof Function;

Array.isArray(cities);

let letters = ["a", "d"];
let characters = letters;

// letters = null;
// characters = null;

letters = characters = null;

const [nameUser, idUser, ageUser] = ["Sławoj", 210, 54];

const game = [120.12, 87, "dobry wujek"];

let [time, points, name] = game;

const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"]

// console.log(italianUsers);

// italianUsers.push("Alessandra");
// console.log(italianUsers);

// italianUsers.unshift("Tomasso");
// console.log(italianUsers)

// const deletedUser = italianUsers.pop();

// delete italianUsers[italianUsers.length - 1];

// italianUsers.shift();
// italianUsers.shift();
// console.log(italianUsers)

// delete italianUsers[0];

// const removeLastElement = italianUsers.pop();
// const removeFirstElement = italianUsers.shift();

const lengthArrayAfterPush = italianUsers.push("Vito");

const lenghthArrayAfterUnshift = italianUsers.unshift("Apollonia");

//-------------------------------------------------------------

const redColors = ["czerwony", "zachodzącego słońca", "krwisty"];

const greenColors = ["zielony", "trawiasty", "zielony banan"];

const redAndGreenColors = redColors.concat(greenColors);

const redGreenBlueColors = redColors.concat(greenColors, ["morski"]);

const colorsCollections = [...redColors, ...greenColors, "morski"];

//---------------------------------------------------------------------------

const items = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"]
items.slice(3);
items.slice(2, 3);
// const newItems = items.slice(0);

console.log(items.slice(2, 3));

console.log(items.slice(-3));

const newItems = items.slice(0, 3);


//-------------------------------------------------------------------------

const animals = ["dog", "cat", "canary", "mouse"];

animals.splice(1, 2);









