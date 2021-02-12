// product-item.js

class ProductItem extends HTMLElement {
  constructor(list, link, img, pTitle, pPrice, button, inCart, productId) {
    super();

    this.attachShadow({mode : 'open'});

    this.list = document.createElement('li');
    this.list.setAttribute('class', 'product');

    this.link = document.createElement('link');
    this.link.setAttribute('rel', 'stylesheet');
    this.link.setAttribute('href', 'styles/styles.css');

    this.img = document.createElement('img');
    this.img.setAttribute('width', 200);

    this.pTitle = document.createElement('p');
    this.pTitle.setAttribute('class', 'title');

    this.pPrice = document.createElement('p');
    this.pPrice.setAttribute('class', 'price');

    this.button = document.createElement('button');
    this.button.textContent = 'Add to Cart'; 

    this.list.append(this.img);
    this.list.append(this.pTitle);
    this.list.append(this.pPrice);
    this.list.append(this.button);

    this.shadowRoot.append(this.list);
    this.shadowRoot.append(this.link);

    this.inCart = false;
    this.productId = 0;

    this.button.onclick = function(el){ 
      //get cart count
      let cartCountElement = document.getElementById('cart-count');
      let cartCount = parseInt(cartCountElement.textContent);

      let button = el.toElement;
      let id = el.toElement.parentElement.id;

      //cart contents
      let cartContents = JSON.parse(localStorage.getItem("ids"));
      let inCart = cartContents[id];

      //change it depending on in cart status
      if (inCart) {
        cartCount--;
        cartContents[id] = false;
        button.textContent = 'Add to Cart'
      }
      else {
        cartCount++;
        cartContents[id] = true;
        button.textContent = 'Remove from Cart'
      }

      //reflect on cart count element
      cartCountElement.textContent = "" + cartCount;
      localStorage.setItem("ids", JSON.stringify(cartContents));
    }
  }

  fill(imgSrc, title, price, id) {
    this.img.setAttribute('src', imgSrc);
    this.img.setAttribute('alt', title);

    this.pPrice.textContent = "$" + price; 
    this.pTitle.textContent = title;

    this.productId = id;
    this.list.setAttribute('id', id);
    if (JSON.parse(localStorage.getItem("ids"))[id] == true) {
      this.button.textContent = 'Remove From Cart';
    }
  }
}

customElements.define('product-item', ProductItem);