function isPositive(number){
    return( number > 0)
};
function isNegative(number) {
    return (number < 0)
};

function isZero(number) {
    return (number === 0)? true : false
};

function isEven(number) {
    return(number % 2 === 0)? true : false
};

function describeNumber(number) {
return {positive: isPositive(number), 
    negative: isNegative(number), 
    zero: isZero(number), 
    even: isEven(number), 
    odd: !isEven(number)}
};


console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
/*
{ positive: true, negative: false, zero: false, even: true, odd: false }
{ positive: false, negative: true, zero: false, even: false, odd: true }
{ positive: false, negative: false, zero: true, even: true, odd: false }
{ positive: true, negative: false, zero: false, even: false, odd: true }
 */