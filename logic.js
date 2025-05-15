const titleInput = document.querySelector('[data-id="createTitle"]');
const contentInput = document.querySelector('[data-id="createNoteText"]');
const storageListEl = document.getElementById("storageListEl");
const LOCAL_STORAGE_KEY = "notesAPP";

let notes = [];
let currentNoteIndex = null;

function newNote() {
  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
  updateNoteList();
}

function emptyInput() {
  if (titleInput.value === "" || contentInput.value === "") {
    alert("Du musst deiner Notiz einen Titel und Inhalt geben");
    return false;
  }
  return true;
}

function resetAfterSave() {
  titleInput.value = "";
  contentInput.value = "";
  currentNoteIndex = null;
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
