/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartKey')) || [];
  cart = new Cart(cartItems); 
  // cart = cartItems;
  // console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tbodyElem = document.querySelector('tbody');
  while(tbodyElem.firstChild) {
    tbodyElem.removeChild(tbodyElem.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE?: Find the table body
  const tbodyElem = document.querySelector('tbody');
      


  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i += 1){
      // DONE: Create a TR
  const trElem = document.createElement('tr');
  tbodyElem.appendChild(trElem);
  // DONE: Create a TD for the delete link, quantity,  and the item

  const tdELem0 = document.createElement('td');
  trElem.appendChild(tdELem0);
  tdELem0.setAttribute('id', `x-button${i}`);
  tdELem0.setAttribute('class', 'xbtn');
  tdELem0.textContent = 'X';

  const tdELem1 = document.createElement('td');
  trElem.appendChild(tdELem1);
  tdELem1.textContent = cart.items[i].quantity;

  const tdELem2 = document.createElement('td');
  trElem.appendChild(tdELem2);
  tdELem2.textContent = cart.items[i].product;
  
   
  }
  


  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {  //this is called when delete link is clicked
  const id = event.target.id;
  const xbtn = id.slice(0, 8);
  const index = id.slice(-1);  
  
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (xbtn === 'x-button') {
    cart.removeItem(index);
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
