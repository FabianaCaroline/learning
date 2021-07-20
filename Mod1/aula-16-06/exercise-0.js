const countries = ["Brazil", "France", "USA", "Turkey", "Portugal"];

countries.push("Korea");
console.log(countries);

countries.pop();
console.log(countries);

countries.unshift("Korea");
console.log(countries);

countries.shift();
console.log(countries);

console.log(countries[countries.length-1]);
console.log(countries[1]);
console.log(countries[2]);
