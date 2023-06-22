"use strict";
/**
 * START: Follow the instructions below.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Add the `any` type to fix the type errors in the following code.
var currency = { name: "Indian rupee" };
currency.code = "THB";
currency = "Baht";
// Fix the if statement in this function so the type of `value` is narrowed to `string`.
function countryNameLength(value) {
    if (typeof value === "number") {
        console.log(value.length);
    }
}
countryNameLength("United States of America");
// Fix the type error we see when calling this function.
// Hint: Replace one of the `never` types with a different type.
function throwCountryError(message) {
    throw new Error("Could not find country: ".concat(message));
}
throwCountryError("Narnia");
