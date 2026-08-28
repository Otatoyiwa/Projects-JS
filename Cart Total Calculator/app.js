const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];


function calculateSubtotal(items) {
    let sum = 0;
    for(let item of Object.values(items)){
    sum += (item.price * item.quantity );
    }
    return sum
}

function calculateDiscount(subtotal, discountPercent) {
    return (subtotal * discountPercent)/ 100
}

function calculateTax(amountAfterDiscount, taxPercent){
    return(amountAfterDiscount * taxPercent)/ 100
}

function createCartSummary(items, discountPercent, taxPercent){
    let subtotal, discount, tax, total;
    subtotal = calculateSubtotal(items);
    discount = calculateDiscount(subtotal, discountPercent);
    let amountAfterDiscount = subtotal - discount;
    tax = calculateTax(amountAfterDiscount, taxPercent);
    total = amountAfterDiscount + tax;

    return {subtotal: subtotal, discount: discount, tax: tax, total:total}
}

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));