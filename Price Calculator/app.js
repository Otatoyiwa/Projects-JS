
function createPriceSummary(price, discountPercent, taxPercent){
    let calculateDiscount = (price * discountPercent)/100 ;
    let priceAfterDiscount = price - calculateDiscount;
    let calculateTax = (priceAfterDiscount * taxPercent) / 100
    let result = (price - calculateDiscount) + calculateTax
    return {price: price, discount: calculateDiscount, tax: calculateTax, finalPrice: result}
}


console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
/*
{ price: 100, discount: 20, tax: 8, finalPrice: 88 }
{ price: 200, discount: 50, tax: 7.5, finalPrice: 157.5 }
{ price: 50, discount: 0, tax: 5, finalPrice: 55 }*/