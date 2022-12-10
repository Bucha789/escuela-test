import { Form } from "./Form";

export const FormContainer = () => {
  const addButton = document.querySelector<HTMLButtonElement>('#addbutton');
  const addButtonContainer = document.querySelector<HTMLHeadElement>('#navContainer');
  let isOpen = false;
  const FormContainer = document.createElement('div');

  addButton?.addEventListener('click', () => {
    console.log('hola')
    if (!isOpen) {
      FormContainer.innerHTML = '';
      isOpen = true;
    } else {
      FormContainer.innerHTML = Form();
      isOpen = false;
    }
  });

  addButtonContainer?.appendChild(FormContainer);
};