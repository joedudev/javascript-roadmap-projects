/* A temperature widget needs two conversion helpers and one formatting helper. Keep the math separate from the display text so each function has one clear job.

Write these functions:

    celsiusToFahrenheit(celsius) should convert Celsius to Fahrenheit and return the number.

    fahrenheitToCelsius(fahrenheit) should convert Fahrenheit to Celsius and return the number.

    formatTemperature(value, unit) should return display text such as "77 F" or "20 C".
*/

function celsiusToFahrenheit(c) {
	return (c * 9) / 5 + 32;
}
function fahrenheitToCelsius(f) {
	return ((f - 32) * 5) / 9;
}
function formatTemperature(v, u) {
	return `${v} ${u}`;
}
// test conversion
const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, "F"));
const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, "C"));
const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, "F"));
const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, "C"));
