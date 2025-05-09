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

// deleteNote

function deleteNote() {
  if (currentNoteIndex !== null) {
    notes.splice(currentNoteIndex, 1);
    currentNoteIndex = null;
    saveToLocalStorage();
    updateNoteList();

    titleInput.value = "";
    contentInput.value = "";
  }
}

// saveNote in LocalStorage

function saveToLocalStorage() {
  localStorage.setItem("notesApp", JSON.stringify(notes));
}

function loadFromLocalStorage() {
  const storedNotes = localStorage.getItem("notesApp");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
    sortNotes();
    updateNoteList();
  }
}

loadFromLocalStorage();
