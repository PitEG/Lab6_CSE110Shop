// Script.js

function populateWithProducts() {
  let products = JSON.parse(localStorage.getItem("products"));
  let ids = JSON.parse(localStorage.getItem('ids'));
  //make a new list of ids of items in cart
  if (ids == null) {
    let ids = new Array;
    for (let i = 0; i < products.length + 1; i++) {
      ids.push(false);
    }
    localStorage.setItem("ids", JSON.stringify(ids));
  }
  //else count how many art in cart
  else {
    let numItemsInCart = 0;
    for(let i =0; i < ids.length; i++) {
      if (ids[i] == true) numItemsInCart++;
    }
    document.getElementById("cart-count").textContent = "" + numItemsInCart;
  }

  //populate product list
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productElement = document.createElement('product-item');
    productElement.fill(product['image'], product['title'], product['price'], product['id']);
    document.getElementById('product-list').appendChild(productElement);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => { 
      localStorage.setItem("products", JSON.stringify(data));
      populateWithProducts();
    });
});
