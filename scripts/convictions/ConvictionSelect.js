/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
  // Trigger fetching the API data and loading it into application state
  getConvictions()
    .then(() => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
  /*
      Use interpolation here to invoke the map() method on
      the convictionsCollection to generate the option elements.
      Look back at the example provided above.
  */
  contentTarget.innerHTML = `
      <select class="dropdown" id="crimeSelect">
          <option value="0">Please select a crime...</option>
          ${convictionsCollection.map(c =>
            `<option value="${c.id}">${c.name}</option>`
          ).join("")}
      </select>
    `;
}

const eventHub = document.querySelector('.container');
eventHub.addEventListener("change", (evt) => {
  if (evt.target.id !== "crimeSelect") {
    return;
  }

  console.log(evt.target.value);

  eventHub.dispatchEvent(new CustomEvent("CrimeSelected", {
    detail: {
      crimeId: parseInt(evt.target.value)
    }
  }));
});