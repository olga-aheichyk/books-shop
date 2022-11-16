import { renderMainLayout, renderHeaderLayout } from './render-page.js'
import { renderBooks } from './render-books.js';

const selectedBooks = [];

renderHeaderLayout();
renderMainLayout();

fetch("../books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderBooks(data, selectedBooks);
  });
