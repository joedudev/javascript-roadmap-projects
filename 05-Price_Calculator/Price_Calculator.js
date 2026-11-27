/* You are calculating the final price for a product after discount and tax. The discount is applied first, and tax is calculated on the discounted price.

Write these functions:

    calculateDiscount(price, discountPercent) should return the discount amount.

    calculateTax(priceAfterDiscount, taxPercent) should return the tax amount.

    calculateFinalPrice(price, discountPercent, taxPercent) should subtract the discount, add tax, and return the final price.

    createPriceSummary(price, discountPercent, taxPercent) should return an object with price, discount, tax, and finalPrice.
*/

function calculateDiscount(priceBeforeDiscount, discountPercent) {
	return priceBeforeDiscount * (discountPercent / 100);
}

function calculateTax(priceAfterDiscount, taxPercent) {
	return priceAfterDiscount * (taxPercent / 100);
}

function calculateFinalPrice(price, discountAmount, taxPercent) {
	return price - discountAmount + taxPercent;
}

function createPriceSummary(price, discountPercent, taxPercent) {
	const discount = calculateDiscount(price, discountPercent),
		tax = calculateTax(price - discount, taxPercent),
		finalPrice = calculateFinalPrice(price, discount, tax);
	return {
		price: price,
		discount: discount,
		tax: tax,
		finalPrice: finalPrice,
	};
}
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
