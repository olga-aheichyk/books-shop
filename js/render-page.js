export const renderBasicPageLayout = () => {
  const main = document.querySelector(".main");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("main__title");
  mainTitle.textContent = "Welcome to amazing book shop!";
  main.appendChild(mainTitle);

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

  main.appendChild(catalogSection);
};
