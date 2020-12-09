let notes = [];

export const useNotes = () => notes.slice();

const dispatchStateChangeEvent = () => {
  const eventHub = document.querySelector(".container");
  eventHub.dispatchEvent(new CustomEvent("noteStateChanged"));
}

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
    .then(response => response.json())
    .then(parsedNotes => {
      notes = parsedNotes
    });
};

export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};