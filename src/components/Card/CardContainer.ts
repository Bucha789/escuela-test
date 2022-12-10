import { getProducts } from "../../helpers/getProducts";
import { Card } from "./Card";

export const CardContainer = async (app: HTMLDivElement) => {
  const cardContainer = document.createElement('div');
  const {products} = await getProducts();
  cardContainer.classList.add('row');
  console.log(products);
  products.forEach((product) => {
    cardContainer.innerHTML += Card(product);
  });

  app.appendChild(cardContainer);
};