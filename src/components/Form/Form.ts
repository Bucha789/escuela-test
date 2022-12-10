import './Form.css';

export const Form = () => {
  return `
  <form class="form__container" id="createform">
    <div class="form-group">
      <label for="productname">Product Name</label>
      <input type="email" name="productname" class="form-control" id="productname" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" class="form-control" id="description" name="description">
    </div>
    <div class="form-group">
      <label for="description">Price</label>
      <input type="number" min="0" class="form-control" id="price" name="price">
    </div>
    <button type="submit" class="btn btn-success">Add</button>
  </form>
`
}