// importing module
///////////////// Named Import
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('oranges', 10);
// console.log(price, tq);

// we can import everything at the same time
console.log('Importing module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('oranges', 10);
// console.log(ShoppingCart.totalPrice);

/////// Default import

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price);
// import add from './shoppingCart.js';
// add('Banana', 10);
// add('Apple', 5);
// add('Oranges', 10);

//////////// Imports have life connection to export(not the copy of export)
import add, { cart } from './shoppingCart.js';
add('Banana', 10);
add('Apple', 5);
add('Oranges', 10);

console.log(cart);
////////////////////////////////////////////

// Top level await
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something went wrong');

// calling the async function will give us a pending promise

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);
// not very clean
//lastPost.then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
