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
