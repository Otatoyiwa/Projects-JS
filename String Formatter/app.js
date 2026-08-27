
function cleanText_Capitalize(text) {
    let res;
    res = text.toLowerCase().split(' ').join('');
    return (res[0].toUpperCase() + res.slice(1))
}

function formatDisplayName(firstName, lastName){
    return (cleanText_Capitalize(firstName)+' '+ cleanText_Capitalize(lastName))
}


console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));