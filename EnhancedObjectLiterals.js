function getLaptop(manufacturer, model, price) {
    const laptop = {
        manufacturer,
        model,
        price
    }

    return laptop
}
const result = getLaptop('Dell', 'Inspiron', 1000);
console.log(result)
