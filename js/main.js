import { renderMainLayout, renderHeaderLayout, renderMainOrderLayout } from './render-page.js'
import { addBookToCart, renderBooks } from './render-books.js';

const selectedBooks = [];
let books = [];

renderHeaderLayout();
renderMainLayout();

fetch("./books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderBooks(data, selectedBooks);
    books = data;
  });

  const fixedCartButton = document.querySelector(".fixed-cart");
  const headerCart = document.querySelector(".cart__wrapper");

  fixedCartButton.addEventListener("dragover", (evt) => {
    evt.preventDefault();
  });

  fixedCartButton.addEventListener("drop", (evt) => {
    evt.preventDefault();
    const id = evt.dataTransfer.getData("text");
    addBookToCart(id, books, selectedBooks);
  });

  const handleCartClick = () => {
    const main = document.querySelector(".main");
    main.textContent = "";
    renderMainOrderLayout(selectedBooks);
  }

  fixedCartButton.addEventListener('click', handleCartClick);
  headerCart.addEventListener('click', handleCartClick);
