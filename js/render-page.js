export const renderHeaderLayout = () => {
  const header = `
    <header class="header">
      <img class="header__logo" src="../assets/icons/read-book-icon.svg" alt="book logo">
      <div class="cart__wrapper">
        <img class="cart" src="../assets/icons/cart.svg" alt="go to cart">
        <div class="cart__round visually-hidden"></div>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
};

export const renderMainLayout = () => {
  const mainFragment = document.createDocumentFragment();
  const main = document.querySelector(".main");

  const fixedCart = document.createElement('div');
  fixedCart.classList.add('fixed-cart');
  fixedCart.innerHTML = `
    <div class="fixed-cart__icon-wrapper">
			<img class="fixed-cart__icon" src="../assets/icons/cart-white.svg" alt="go to cart">
		</div>
		<div class="fixed-cart__text">Drag book to add it to cart</div>
  `;
  mainFragment.appendChild(fixedCart);

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main__title");
  mainTitle.textContent = "Welcome to amazing book shop!";
  mainFragment.appendChild(mainTitle);

  const catalogSection = document.createElement("section");
  catalogSection.classList.add("catalog");

  const fragment = document.createDocumentFragment();

  const catalogTitle = document.createElement("h2");
  catalogTitle.classList.add("catalog__title");
  catalogTitle.textContent = "Books Catalog";
  fragment.appendChild(catalogTitle);

  const catalogList = document.createElement("div");
  catalogList.classList.add("catalog__list");
  fragment.appendChild(catalogList);

  catalogSection.appendChild(fragment);

  mainFragment.appendChild(catalogSection);
  main.appendChild(mainFragment);
};

const createOrderCard = (book) => {
  const { id, author, imageLink, title, price } = book;

  const orderItem = document.createElement("div");
  orderItem.setAttribute("id", id);
  orderItem.classList.add("order__item");
  orderItem.classList.add("book");
  orderItem.innerHTML = `
		<img class="book__image" src=${imageLink}>
		<p class="book__author">${author}</p>
		<p class="book__name">${title}</p>
		<p class="book__price">$ ${price}</p>
		<img class="book__close" src="../assets/icons/close-icon.png" alt="delete from cart">
	`;

  return orderItem;
};

export const renderMainOrderLayout = (orderedBooks) => {
  const mainFragment = document.createDocumentFragment();
  const main = document.querySelector(".main");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main__title");
  mainTitle.textContent = "Ordered Books";
  mainFragment.appendChild(mainTitle);

  const orderListSection = document.createElement("section");
  orderListSection.classList.add("order__list");

  const fragment = document.createDocumentFragment();

  orderedBooks.forEach((book) => {
    const card = createOrderCard(book);
    fragment.appendChild(card);
    //addEventListenersToCard(card, books, selectedBooks);
  });

  const orderTotal = document.createElement('div');
  orderTotal.classList.add("order__bottom");
  orderTotal.innerHTML = `
    <div class="order__total">Total: $<span class="order__total-sum">${orderedBooks.reduce((sum, book) => book.price + sum, 0)}</span></div>
		<a href="./delivery-form.html" target="_blank" class="order__button">Confirm Order</a>
  `;

  fragment.appendChild(orderTotal);

  orderListSection.appendChild(fragment);

  mainFragment.appendChild(orderListSection);

  main.appendChild(mainFragment);
};