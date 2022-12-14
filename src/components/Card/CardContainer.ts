import { getProducts } from "../../helpers/getProducts";
import { Card } from "./Card";

export const CardContainer = async (app: HTMLDivElement) => {
  const cardContainer = document.createElement('div');
  const searchForm = document.querySelector<HTMLFormElement>('#searchForm');
  const { products } = await getProducts();
  cardContainer.classList.add('row');

  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(searchForm);
    const searchValue = data.get('searchText');
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchValue?.toString().toLowerCase() as string));
    cardContainer.innerHTML = '';
    filteredProducts.forEach((product) => {
      cardContainer.innerHTML += Card(product);
    });
  });
  products.forEach((product) => {
    cardContainer.innerHTML += Card(product);
  });

  app.appendChild(cardContainer);
};