import { CardContainer } from "./components/Card/CardContainer";
import { FormContainer } from "./components/Form/FormContainer";

const app = document.querySelector<HTMLDivElement>('#app');

CardContainer(app as HTMLDivElement);
FormContainer();