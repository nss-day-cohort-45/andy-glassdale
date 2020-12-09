import { saveNote } from './NoteProvider.js';

const eventHub = document.querySelector('.container');
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

    const textElement = document.querySelector('#text');
    const suspectElement = document.querySelector('#suspect');

    if (!(textElement.value && suspectElement.value)) {
      alert("You'd better enter a note and a suspect, buddy.");
      return;
    }

    // Make a new object representation of a note
    const newNote = {
      text: textElement.value,
      suspect: suspectElement.value,
      timestamp: new Date()
    };

    // Change API state and application state
    saveNote(newNote).then(() => {
      textElement.value = "";
      suspectElement.value = "";
    });
  }
});

const render = () => {
  const contentTarget = document.querySelector(".noteFormContainer");

  contentTarget.innerHTML = `
    <textarea id="text" placeholder="New Note"></textarea>
    <input type="text" id="suspect" placeholder="Suspect">
    <button id="saveNote">Save Note</button>
  `;
};

export const NoteForm = () => {
  render();
};