import { renderBasicPageLayout } from './render-page.js'
import { renderBooks } from './render-books.js';

renderBasicPageLayout();

fetch("../books.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderBooks(data);
  });
