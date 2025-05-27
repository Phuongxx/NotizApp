function getNextId() {
  const sortedNotes = notes.sort((noteA, noteB) => noteA.id - noteB.id);
  let nextId = 1;
  for (let note of sortedNotes) {
    if (nextId < note.id) break;
    nextId = note.id + 1;
  }
  return nextId;
}

function saveNote() {
  if (!isEmptyInput()) return;

  const titleInput = getTitleInput();
  const contentInput = getContentInput();

  if (currentNoteIndex !== null) {
    updateNote(currentNoteIndex, titleInput, contentInput);
  } else {
    const newNoteSaved = newNoteEntry();
    notes.push(newNoteSaved);
  }

  resetAfterSave();
  sortNotes();
  saveToLocalStorage();
  updateNoteList();
}

function sortNotes() {
  notes.sort((noteA, noteB) => new Date(noteB.date) - new Date(noteA.date));
}

function deleteNote() {
  if (currentNoteIndex !== null) {
    notes.splice(currentNoteIndex, 1);
    currentNoteIndex = null;
    saveToLocalStorage();
    previousPage();
  }
}

function saveToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
}

function loadFromLocalStorage() {
  const storedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
    sortNotes();
    updateNoteList();
  }
}

loadFromLocalStorage();
