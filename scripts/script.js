// Script.js

function populateWithProducts() {
  let objects = JSON.parse(localStorage.getItem("products"));

  for (let i = 0; i < objects.length; i++) {
    let product = objects[i];
    let productElement = document.createElement('product-item');
    productElement.fill(product['image'], product['title'], product['price']);
    document.getElementById('product-list').appendChild(productElement);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => localStorage.setItem("products", JSON.stringify(data)));
  populateWithProducts();
});
