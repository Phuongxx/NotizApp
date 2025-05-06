// To Do 1. add note with the note button. Everytime it has to generate a new div/wrapper


// creating DOM

function createNote(){

    const titleInput = document.querySelector('[data-id="createTitle"]');
    const contentInput = document.querySelector('[data-id="createNoteText"]');
    const storageList = document.getElementById("storageList");

    const noteEntry = document.createElement("div");
    noteEntry.classList.add("note-entry");
    // open noteEntry logic
    noteEntry.addEventListener("click", (displayNote) => {
        const clickedNote = displayNote.currentTarget;
        const clickedTitle = clickedNote.querySelector('.note-title').textContent;
        const clickedContent = clickedNote.querySelector('.note-content').textContent;
        titleInput.value = clickedTitle;
        contentInput.value = clickedContent;
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

    noteEntry.append(noteTitle, noteContent, noteDate);
    storageList.appendChild(noteEntry);

    titleInput.value = "";
    contentInput.value = "";

}

// To Do 2. A button that saves the note in a div on the left side and also in LocalStorage
// To Do 3. A delete Button, that deletes the complete note from the display and also from the localstorage
