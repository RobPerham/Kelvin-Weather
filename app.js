// current temp in Kelvin
const Kelvin = 293;
//figure out the temp in celuis from Kelvin
const celsius = Kelvin - 273;
//figure out the temp Fahrenheit from celsius
const Fahrenheit = celsius * (9 / 5) + 32;
//round down fahremneit
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
