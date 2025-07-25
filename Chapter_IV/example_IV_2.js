
const greetArrow = (name) => {
    return `Hello, ${name}!`; // Using template literal here!
};
// Calling the function:
console.log(greetArrow("Apprentice")); // Output: Hello, Apprentice!

// Even shorter for single expressions (implicit return):
const double = (num) => num * 2;
console.log(double(5)); // Output: 10