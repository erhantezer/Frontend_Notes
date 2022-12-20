//get UL element
const list = document.getElementById('list');

//Get items by class name (two ways)

const itemsByClassName = document.getElementsByClassName('item');



const itemsByQuerySelector = document.querySelectorAll('.item');

//console.log('First console log', itemsByClassName, itemsByQuerySelector);

const myArray=Array.from(itemsByClassName)
//console.log(myArray)

//adding the fourth element

list.innerHTML += `<li class="item">Fourth Item</li>`;

//console.log('Second console log', itemsByClassName, itemsByQuerySelector);

console.log(typeof itemsByClassName[0]);
console.log(typeof itemsByQuerySelector[0]);


//const childList = list.childNodes;
//list.innerHTML += `<li class="item">asdasdasfd</li>`;

//console.log(childList);