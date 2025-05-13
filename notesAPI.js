// set uniqueID
function getNextId() {
  const sortedNotes = notes.sort((noteA, noteB) => noteA.id - noteB.id);
  let nextId = 1;
  for (let note of sortedNotes) {
    if (nextId < note.id) break;
    nextId = note.id + 1;
  }
  return nextId;
}

// saveNote

function saveNote() {
  if (titleInput.value === "" || contentInput.value === "") {
    alert("Du musst deiner Notiz einen Titel und Inhalt geben");
    return;
  }

  // create new note
  const newNote = {
    title: titleInput.value,
    content: contentInput.value,
    id: getNextId(),
    date: new Date().toISOString(),
  };
  notes.push(newNote);

  sortNotes();
  saveToLocalStorage();
  updateNoteList();

  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
}
// sortNotes

function sortNotes() {
  notes.sort((noteA, noteB) => new Date(noteB.date) - new Date(noteA.date));
}

// deleteNotes

function deleteNote() {
  if (currentNoteIndex !== null) {
    const noteToDelete = notes[currentNoteIndex];
    notes = notes.filter((note) => note.id !== noteToDelete.id);

    currentNoteIndex = null;

    saveToLocalStorage();
    updateNoteList();

    titleInput.value = "";
    contentInput.value = "";
  }
}

// saveNote in LocalStorage

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
