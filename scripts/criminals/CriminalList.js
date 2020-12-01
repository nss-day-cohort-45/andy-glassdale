import { Criminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalProvider.js';

const render = (criminals) => {
  const container = document.querySelector(".criminalsContainer");
  container.innerHTML = criminals.map(Criminal).join("");
}

export const CriminalList = () => {
  getCriminals().then(() => render(useCriminals()));
};