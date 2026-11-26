/* Given a number, return a small report describing what kind of number it is. Use simple boolean helper functions, then combine their results in describeNumber.

Write these functions:

    isPositive(number) should return true when the number is greater than 0.

    isNegative(number) should return true when the number is less than 0.

    isZero(number) should return true when the number is exactly 0.

    isEven(number) should return true when the number is even.

    describeNumber(number) should return an object with positive, negative, zero, even, and odd properties.
 */
function isPositive(n) {
	return n > 0;
}
function isNegative(n) {
	return n < 0;
}
function isZero(n) {
	return n === 0;
}
function isEven(n) {
	return n % 2 === 0;
}
function describeNumber(n) {
	return {
		positive: isPositive(n),
		negative: isNegative(n),
		zero: isZero(n),
		even: isEven(n),
		odd: !isEven(n),
	};
}
// Sample Checks
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
