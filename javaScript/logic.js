const storageListEl = document.getElementById("storageListEl");
const contentPage = document.querySelector("#contentPageEl");
const LOCAL_STORAGE_KEY = "notesAPP";
const mainPageEl = document.querySelector("#mainPage");
const previousPageEl = null;
const themePageEl = document.querySelector("#themePage");

let notes = [];
let currentNoteIndex = null;

function getTitleInput() {
  return document.querySelector("#createTitle");
}

function getContentInput() {
  return document.querySelector("#createNoteText");
}

function emptyInput() {
  const titleInput = getTitleInput();
  const contentInput = getContentInput();
  if (!titleInput || !contentInput) return false;
  if (titleInput.value === "" || contentInput.value === "") {
    alert("Du musst deiner Notiz einen Titel und Inhalt geben");
    return false;
  }
  return true;
}

function updateNote(selectedNote) {
  const titleInput = getTitleInput();
  const contentInput = getContentInput();
  if (!titleInput || !contentInput) return;
  notes[selectedNote].title = titleInput.value;
  notes[selectedNote].content = contentInput.value;
  notes[selectedNote].date = new Date().toISOString();
}

function newNoteEntry() {
  const titleInput = getTitleInput();
  const contentInput = getContentInput();
  return {
    title: titleInput.value,
    content: contentInput.value,
    id: getNextId(),
    date: new Date().toISOString(),
  };
}

function resetAfterSave() {
  const titleInput = getTitleInput();
  const contentInput = getContentInput();
  if (titleInput) titleInput.value = "";
  if (contentInput) contentInput.value = "";
  currentNoteIndex = null;
  previousPage();
  updateNoteList();
}

function newNote(editIndex = null) {
  currentNoteIndex = editIndex;

  if (previousPageEl === null) {
    contentPage.innerHTML = `<div class="title-and-save">
        
        <input
          type="text"
          class="create-title"
          placeholder="Überschrift eingeben"
          id="createTitle"
          data-id="themeColor"
        />
      </div>
      <textarea
        name="textNote"
        id="createNoteText"
        class="note-textarea"
        data-id="themeColor"
      ></textarea>

      <div class="save-and-delete-button">
          <button class="back-button button" onclick="previousPage()" data-id="themeColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
          <button class="save-button button" onclick="saveNote()" data-id="themeColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
          <button class="delete-button button" onclick="deleteNote()" data-id="themeColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        </div>`;

    mainPageEl.remove();
    updateNoteList();
  }
}

function previousPage() {
  contentPage.innerHTML = "";
  document.body.appendChild(mainPageEl);
  currentNoteIndex = null;
  updateNoteList();
  themePageEl.innerHTML = "";
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
      newNote(index);
      const titleInput = getTitleInput();
      const contentInput = getContentInput();
      if (titleInput) titleInput.value = note.title;
      if (contentInput) contentInput.value = note.content;
      updateNoteList();
    });

    storageListEl.appendChild(noteEntryEl);
  });
}

function themeColorPage() {
  themePageEl.innerHTML = `<h2 class="settings-title">Theme Color</h2>
      <button class="back-button button" onclick="previousPage()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
      <div class="theme-color-container">
        <button class="select-color scarlet-red"onclick="scarletRed()"></button>
        <button class="select-color mint-green" onclick="mintGreen()"></button>
        <button class="select-color key-lime" onclick="keyLime()"></button>
        <button class="select-color soft-pink" onclick="softPink()"></button>
        <button class="select-color light-orange" onclick="orange()"></button>
        <button class="select-color ice-blue" onclick="()"></button>
      </div>`;
  mainPageEl.remove();
}
