const products = [
  { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
  { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
  { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
  {
    id: 4,
    name: 'Water Bottle',
    category: 'fitness',
    price: 18,
    inStock: true,
  },
];



function filterByCategory(products, category){
    let clone = products.slice();
    return clone.filter(el => el.category === category)
} //should return products in the matching category.

function filterByMaxPrice(products, maxPrice){
    let clone = products.slice();
    return clone.filter(el => el.price <= maxPrice)
} //should return products at or below the max price.

function getInStockProducts(products){
    let clone = products.slice();
    return clone.filter(el => el.inStock === true)
} //should return products where inStock is true.

function findProductById(products, productId){
    let clone = products.slice();
    return clone.find(el => el.id === productId);
} //should return one matching product or undefined.

function searchProducts(products, searchText){
    let clone = products.slice();
    return [clone.find(el => el.name.toLowerCase().includes(searchText))]
} //should return products whose name includes the search text, ignoring casing.




console.log(filterByCategory(products, 'stationery').map((product) => product.name));
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, 'pen').map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));


