const multiLineString = `This is a multi-line string.
It spans multiple lines without the need for escape characters.
You can use template literals to define it.
It's very convenient for long texts, documentation, and more.`;

console.log(multiLineString);


// Template literals also support variable interpolation, allowing you to embed expressions directly within the string using ${}:

const name = "John";
const age = 30;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
