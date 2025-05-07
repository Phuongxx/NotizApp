const titleInput = document.querySelector('[data-id="createTitle"]');
const contentInput = document.querySelector('[data-id="createNoteText"]');
const storageListEl = document.getElementById("storageListEl");

let notes = [];
let currentNoteIndex = null;

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

function updateNoteList() {
  storageListEl.innerHTML = "";

  notes.forEach((note, index) => {
    const noteEntryEl = document.createElement("div");
    noteEntryEl.classList.add("note-entry");

    if (index === currentNoteIndex) {
      noteEntryEl.classList.add("selected-note");
    }

    const noteTitleEl = document.createElement("div");
    noteTitleEl.classList.add("note-title");
    noteTitleEl.textContent = note.title;

    const noteContentEl = document.createElement("div");
    noteContentEl.classList.add("note-content");
    noteContentEl.textContent = note.content;

    const noteDateEl = document.createElement("div");
    noteDateEl.classList.add("note-date");
    noteDateEl.textContent = new Date(note.date).toLocaleString("de-DE");

    noteEntryEl.append(noteTitleEl, noteContentEl, noteDateEl);

    noteEntryEl.addEventListener("click", () => {
      currentNoteIndex = index;
      titleInput.value = note.title;
      contentInput.value = note.content;
      updateNoteList();
    });

    storageListEl.appendChild(noteEntryEl);
  });
}

function sortNotes() {
  notes.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function newNote() {
  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
  updateNoteList();
}

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
