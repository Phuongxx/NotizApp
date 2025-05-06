// To Do 1. add note with the note button. Everytime it has to generate a new div/wrapper
const titleInput = document.querySelector('[data-id="createTitle"]');
const contentInput = document.querySelector('[data-id="createNoteText"]');
const storageList = document.getElementById("storageList");
let currentNote = null;

// creating DOM
function createNote(){


    const noteEntry = document.createElement("div");
    noteEntry.dataset.id = "noteEntry"
    noteEntry.classList.add("note-entry");

    // open noteEntry logic

    noteEntry.addEventListener("click", (displayNote) => {
        const clickedNote = displayNote.currentTarget;
        const clickedTitle = clickedNote.querySelector('.note-title').textContent;
        const clickedContent = clickedNote.querySelector('.note-content').textContent;
        titleInput.value = clickedTitle;
        contentInput.value = clickedContent;

        currentNote = clickedNote
    })

    const noteTitle = document.createElement("div");
    noteTitle.classList.add("note-title");
    noteTitle.textContent = titleInput.value;

    const noteContent = document.createElement("div");
    noteContent.classList.add("note-content");
    noteContent.textContent = contentInput.value;

    const noteDate = document.createElement("div");
    noteDate.classList.add("note-date");
    noteDate.textContent = new Date().toLocaleString();

    // appending DOM

    storageList.appendChild(noteEntry);
    noteEntry.append(noteTitle, noteContent, noteDate);

    titleInput.value = "";
    contentInput.value = "";
}

// newNoteButton

function newNote(){
    titleInput.value = "";
    contentInput.value = "";
}

// deleteFunction

function deleteNote() {
    const titleInput = document.querySelector('[data-id="createTitle"]');
    const contentInput = document.querySelector('[data-id="createNoteText"]');

    if (currentNote) {
        currentNote.remove();
        currentNote = null;   


        titleInput.value = "";
        contentInput.value = "";
    }
}

// To Do 2. A button that saves the note in a div on the left side and also in LocalStorage
// To Do 3. A delete Button, that deletes the complete note from the display and also from the localstorage
