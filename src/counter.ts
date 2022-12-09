import { getProducts } from "./helpers/getProducts"

export async function setupCounter(element: HTMLButtonElement) {
  const data = await getProducts();
  console.log(data);
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
