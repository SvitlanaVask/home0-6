/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

import products from "./products.js";

const prodContainer = document.querySelector('.js-products');
const prodCardArray = products.map(prodCardMaker);

function prodCardMaker(product) {
  const prodCard = document.createElement('article');
  prodCard.classList.add('product');
  
  const prodName = document.createElement('h2');
  prodName.classList.add('product__name');
  prodName.textContent = product.name;

  const prodDescr = document.createElement('p');
  prodDescr.classList.add('product__descr');
  prodDescr.textContent = product.description;
 
  const prodPrice = document.createElement('p');
  prodPrice.classList.add('product__pridct');
  prodPrice.textContent = `Цена: ${product.price} кредитов`;

  prodCard.append(prodName, prodDescr, prodPrice);
  return prodCard; 
};

prodContainer.append(...prodCardArray);
