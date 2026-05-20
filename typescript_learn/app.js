"use strict";
// Data Types
Object.defineProperty(exports, "__esModule", { value: true });
let a = 12;
//inferred type array -> array can have only all this value not other
let arr = [1, 2, 3, "name", true];
let arr2 = [1, 2, 3, { name: 'hi' }, { name: true }, { nam: false }];
//specific array
let arr3 = [1, 2, 3, 44, 5,]; //array of numbers
// Tuple in TypeScript:
// Tuple is a special type of array where the number of elements, order, and data types are fixed.
// mnje data chi input pn specific order madhe aali pahije
let b = ["jo", true];
// Tuple is a strict array in TypeScript where data types, order, and number of elements are fixed and compulsory.
// | `type[]`         | Array of same type         |
// | `[type1, type2]` | Tuple with fixed positions |
// normal array -> “types match झाले की चालेल”
// tuple array -> “type पण exact पाहिजे, position पण exact पाहिजे, count पण exact पाहिजे.” 
// enums- enumerations
// Object = actual data
// Enum = allowed choices/options
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
const order = {
    id: 101,
    item: "Pizza",
    price: 299,
    status: Role.Guest
};
