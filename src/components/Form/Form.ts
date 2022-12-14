import { addNewProduct } from '../../helpers/addNewProducts';
import { categoryTypes } from '../../types';
import './Form.css';

export const Form = () => {


  setTimeout(() => {
    const form = document.querySelector<HTMLFormElement>('#createform');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const productname = data.get('productname');
      const description = data.get('description');
      const category = data.get('category');
      const price = data.get('price');
      addNewProduct({title: productname as string, description: description as string, price: isNaN(Number(price)) ? 0 : Number(price), category: category as categoryTypes});
      window.location.reload();
    });
  });


  return `
    <form class="form__container" id="createform">
      <div class="form-group">
        <label for="productname">Product Name</label>
        <input required type="text" name="productname" class="form-control" id="productname" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input required type="text" class="form-control" id="description" name="description">
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input required type="text" class="form-control" id="category" name="category">
      </div>
      <div class="form-group">
        <label for="description">Price</label>
        <input required type="number" min="0" class="form-control" id="price" name="price">
      </div>
      <button type="submit" class="btn btn-success">Add</button>
    </form>
  `
}