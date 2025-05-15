const titleInput = document.querySelector('[data-id="createTitle"]');
const contentInput = document.querySelector('[data-id="createNoteText"]');
const storageListEl = document.getElementById("storageListEl");
const LOCAL_STORAGE_KEY = "notesAPP";

let notes = [];
let currentNoteIndex = null;

function emptyInput() {
  if (titleInput.value === "" || contentInput.value === "") {
    alert("Du musst deiner Notiz einen Titel und Inhalt geben");
    return false;
  }
  return true;
}

function updateNote(selectedNote, title, content) {
  notes[selectedNote].title = title.value;
  notes[selectedNote].content = content.value;
  notes[selectedNote].date = new Date().toISOString();
}

function newNoteEntry() {
  return {
    title: titleInput.value,
    content: contentInput.value,
    id: getNextId(),
    date: new Date().toISOString(),
  };
}

function resetAfterSave() {
  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
  updateNoteList();
}

function newNote() {
  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
  updateNoteList();
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
