let message = true;

let promise = new Promise((resolve, reject) => {
    if (message) {
        resolve([
            { name: "anik", email: "anik@gmail.com" },
            { name: "Nikko", email: "nikko@gamil.com" },
        ]);
    } else {
        reject("User not found");
    }
});
promise.then(result => {
    console.log(result)
})

promise.catch(error => {
    console.log(error)
})

