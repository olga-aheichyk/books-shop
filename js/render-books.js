export const renderBooks = (books, selectedBooks) => {
  const catalogList = document.querySelector(".catalog__list");

  const fragment = document.createDocumentFragment();

  books.forEach((book) => {
    const card = createCard(book);
    fragment.appendChild(card);
    addEventListenersToCard(card, books, selectedBooks);
  });

  catalogList.appendChild(fragment);
};

const createCard = (book) => {
  const { id, author, imageLink, title, price, description } = book;

  const catalogItem = document.createElement("article");
  catalogItem.setAttribute("id", id);
  catalogItem.classList.add("catalog__item");
  catalogItem.classList.add("book");
  catalogItem.setAttribute("draggable", true);
  catalogItem.innerHTML = `
		<img class="book__image" src=${imageLink}>
		<p class="book__author">${author}</p>
		<p class="book__name">${title}</p>
		<p class="book__price">$ ${price}</p>
		<button class="book__button show-more-button">Show More</button>
		<button class="book__button add-to-cart">Add to Cart</button>
		<div class="popup visually-hidden">
			<p class="popup__title">${title}</p>
			<p class="popup__description">${description}</p>
			<button class="popup__button">Close</button>
		</div>
	`;

  return catalogItem;
};

const addBookToCart = (evt, books, selectedBooks) => {
  const selectedBook = books.find(
    (book) => book.id === evt.target.closest("article").id
  );
  selectedBooks.push(selectedBook);

  const cartRound = document.querySelector(".cart__round");
  cartRound.classList.remove("visually-hidden");
  cartRound.textContent = selectedBooks.length;
};

const addEventListenersToCard = (card, books, selectedBooks) => {
  card.addEventListener("dragend", (evt) => {
    addBookToCart(evt, books, selectedBooks);
  });

  const addToCartButton = card.querySelector(".add-to-cart");

  addToCartButton.addEventListener("click", (evt) => {
    addBookToCart(evt, books, selectedBooks);
  });

  const showMoreButton = card.querySelector(".show-more-button");
  const popup = card.querySelector(".popup");
  const closePopupButton = popup.querySelector(".popup__button");

  showMoreButton.addEventListener("click", () => {
    popup.classList.remove("visually-hidden");
  });

  closePopupButton.addEventListener("click", () => {
    popup.classList.add("visually-hidden");
  });
};
