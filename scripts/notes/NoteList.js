import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

export const NoteList = (isListVisible) => {
  if (isListVisible) {
    getNotes()
      .then(() => {
        const allNotes = useNotes();
        render(allNotes);
      });
  } else {
    clearNotes();
  }
};


const contentTarget = document.querySelector('.noteList');
const render = (noteArray) => {
  contentTarget.innerHTML = noteArray.map(NoteHTMLConverter).join("");
};
const clearNotes = () => {
  contentTarget.innerHTML = "";
};


let isListVisible = false;
const eventHub = document.querySelector('.container');
eventHub.addEventListener('showNotesClicked', () => {
  isListVisible = !isListVisible;
  NoteList(isListVisible);
});
eventHub.addEventListener('noteStateChanged', () => NoteList(isListVisible));
