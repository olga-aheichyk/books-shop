import { renderMainLayout, renderHeaderLayout } from './render-page.js'
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
    const id = evt.dataTransfer.getData("bookId");
    addBookToCart(id, books, selectedBooks);
  });
