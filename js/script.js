let rain = prompt('How many inches of rain fell?');
console.log("*".repeat(rain));

let yield = 50;

if (rain >= 20) {
    yield *= 0.90;
} else if (rain < 10) {
    yield *= 0.80;
} else {
    yield;
};

let fert = prompt('Did you use fertilizer?');

if (fert === 'yes') {
    typeOfFert = prompt('Did you use premium or regular fertilizer?');
    if (typeOfFert === 'regular') {
        yield *= 1.10;
    } else if (typeOfFert === 'premium') {
        yield *= 1.15;
    };
} else if (fert === 'no') {
    yield;
};

console.log(`The yield should be ${yield} bushels per acre.`);
