// product-item.js

class ProductItem extends HTMLElement {
  constructor(list, link, img, pTitle, pPrice, button) {
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
  }

  fill(imgSrc, title, price) {
    this.img.setAttribute('src', imgSrc);
    this.img.setAttribute('alt', title);

    this.textContent = "$" + price; 
    this.pTitle.textContent = title;

    //button.setAttribute('onclick', alert('Added to Cart!'))
  }
}

customElements.define('product-item', ProductItem);