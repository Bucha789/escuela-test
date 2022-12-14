import { Product } from "../../types";
import { colorsDictionary } from "../../utils/colorsDictionary";

export const Card = ({brand, category, description, price, images, title}: Product) => {
  return `
    <div class="card col-md-4 ">
      <img class="bg-placeholder-img card-img-top img-fluid" src="${images?.[0] || "https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg"}" alt="${brand}" />
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <p class="${colorsDictionary[category] || 'bg-primary'} text-white rounded px-2">${category}</p>
          <p class="text-muted">$${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;
};