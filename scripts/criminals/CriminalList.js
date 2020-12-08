import { useConvictions } from '../convictions/ConvictionProvider.js';
import { Criminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalProvider.js';

const render = (criminals) => {
  const container = document.querySelector(".criminalsContainer");
  container.innerHTML = criminals.map(Criminal).join("");
}

export const CriminalList = () => {
  getCriminals().then(() => render(useCriminals()));
};

const eventHub = document.querySelector('.container');
eventHub.addEventListener("CrimeSelected", (evt) => {
  const convictions = useConvictions();
  const selectedConviction = convictions.find(c => c.id === evt.detail.crimeId);

  const criminals = useCriminals();

  if (selectedConviction) {
    render( criminals.filter(c => c.conviction === selectedConviction.name));
  } else {
    render(criminals);
  }
})