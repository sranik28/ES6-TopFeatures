function greet(name = "Anonymous", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet(); // Output: Hello, Anonymous!
greet("John"); // Output: Hello, John!
greet("Alice", "Hi"); // Output: Hi, Alice!
