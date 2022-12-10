import { Product } from "../../types";

export const Card = ({brand, category, description, price, images, title}: Product) => {
  return `
    <div class="card col-md-4 ">
      <img class="bg-placeholder-img card-img-top" src="${images[0]}" alt="${brand}" />
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <p>${category}</p>
          <p class="text-muted">$${price}</p>
        </div>
      </div>
    </div>
  `;
};