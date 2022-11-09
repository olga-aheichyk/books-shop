export const renderBooks = (books) => {
	const catalogList = document.querySelector(".catalog__list");

	const fragment = document.createDocumentFragment();

	books.forEach((book) => {
		const card = createCard(book);
		fragment.appendChild(card);
	})

  	catalogList.appendChild(fragment);
}

const createCard = (book) => {
	const { author, imageLink, title, price, description } = book;

	const catalogItem = document.createElement("article");
  	catalogItem.classList.add("catalog__item");
  	catalogItem.classList.add("book");
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
}
