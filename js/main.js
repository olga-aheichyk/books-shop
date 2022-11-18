import { renderMainLayout, renderHeaderLayout, renderMainOrderLayout } from './render-page.js'
import { addBookToCart, renderBooks } from './render-books.js';

const selectedBooks = [];
let books = [];

renderHeaderLayout();
renderMainLayout();

fetch("../books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderBooks(data, selectedBooks);
    books = data;
  });

  const fixedCartButton = document.querySelector(".fixed-cart");

  fixedCartButton.addEventListener("dragover", (evt) => {
    evt.preventDefault();
  });

  fixedCartButton.addEventListener("drop", (evt) => {
    evt.preventDefault();
    const id = evt.dataTransfer.getData("text");
    console.log("id", id);
    addBookToCart(id, books, selectedBooks);
  });

  fixedCartButton.addEventListener('click', () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    renderMainOrderLayout(selectedBooks);
  })
