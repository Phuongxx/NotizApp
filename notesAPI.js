// saveNote

function newNote() {
  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
  updateNoteList();
}

function saveNote() {
  if (titleInput.value === "" || contentInput.value === "") {
    alert("Du musst deiner Notiz einen Titel und Inhalt geben");
    return;
  }

  const newNote = {
    title: titleInput.value,
    content: contentInput.value,
    date: new Date().toISOString(),
  };

  notes.push(newNote);
  sortNotes();
  saveToLocalStorage();
  updateNoteList();

  titleInput.value = "";
  contentInput.value = "";
}

// sortNotes

function sortNotes() {
  notes.sort((noteA, noteB) => new Date(noteB.date) - new Date(noteA.date));
}

// deleteNote

function deleteNote() {
  if (currentNoteIndex !== null) {
    notes.splice(currentNoteIndex, 1);
    currentNoteIndex = null;
    saveToLocalStorage();
    updateNoteList();
    deleteFromLocalStorage();

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

function deleteFromLocalStorage() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

loadFromLocalStorage();
