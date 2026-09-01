const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];


 function calculateTotal(expenses) {
   let total = 0;
    for(let i of Array.from(expenses)){
        total += i.amount
    }
    return total
    //should return the total amount spent.

}
 function calculateCategoryTotal(expenses, category){
    let amountExp = 0;
    for(let i of Array.from(expenses)){
        if(i.category === category){
            amountExp += i.amount
        }
    }
    return amountExp
} //should return the total for one category.

 function findLargestExpense(expenses){
    let max = 0;
    let clone;
    for(let i of Array.from(expenses)){
        (i.amount >= max)? clone = i : max = i.amount;
    }
    return clone
} //should return the full expense object with the largest amount.

 function createExpenseSummary(expenses){
    let total, foodTotal, transportTotal, largestExpense;
    total = calculateTotal(expenses);
    foodTotal = calculateCategoryTotal(expenses, 'food');
    transportTotal = calculateCategoryTotal(expenses, 'transport');
    largestExpense = findLargestExpense(expenses)
    return{total, foodTotal, transportTotal, largestExpense}
} //should return total, foodTotal, transportTotal, and largestExpense.



console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));

console.log(findLargestExpense(expenses));