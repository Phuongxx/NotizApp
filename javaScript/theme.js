function scarletRed() {
  const scarletRedButton = document.querySelectorAll(".button");
  scarletRedButton.forEach((element) => {
    element.classList.add("scarlet-red");
  });

  const scarletRedTextarea = document.querySelectorAll(
    '[data-id="changeTheme"]'
  );
  scarletRedTextarea.forEach((element) => {
    element.classList.add("scarlet-red-textarea");
  });

  const scarletRedEntryList = document.querySelectorAll("#noteEntry");
  scarletRedEntryList.forEach((element) => {
    element.classList.add("scarlet-red-note-entry");
  });

  const scarletRedHover = document.querySelectorAll(".hover");
  scarletRedHover.forEach((element) => {
    element.classList.add("scarlet-red-hover");
  });

  const themePageScarlet = document.querySelector("#themePage");
  themePageScarlet.classList.add("scarlet-red-settings-background");

  localStorage.setItem("themeColor", "scarlet-red");
}

function mintGreen() {
  const mintGreenButton = document.querySelectorAll(".button");
  mintGreenButton.forEach((element) => {
    element.classList.add("mint-green");
  });

  const mintGreenTextarea = document.querySelectorAll(
    '[data-id="changeTheme"]'
  );
  mintGreenTextarea.forEach((element) => {
    element.classList.add("mint-green-textarea");
  });

  const mintGreenEntryList = document.querySelectorAll("#noteEntry");
  mintGreenEntryList.forEach((element) => {
    element.classList.add("mint-green-note-entry");
  });

  const mintGreenHover = document.querySelectorAll(".hover");
  mintGreenHover.forEach((element) => {
    element.classList.add("mint-green-hover");
  });

  const themePageMint = document.querySelector("#themePage");
  themePageMint.classList.add("mint-green-settings-background");

  localStorage.setItem("themeColor", "mint-green");
}

function violetRed() {
  const violetRedButton = document.querySelectorAll(".button");
  violetRedButton.forEach((element) => {
    element.classList.add("violet-red");
  });

  const violetRedTextarea = document.querySelectorAll(
    '[data-id="changeTheme"]'
  );
  violetRedTextarea.forEach((element) => {
    element.classList.add("violet-red-textarea");
  });

  const violetRedEntryListAll = document.querySelectorAll("#noteEntry");
  violetRedEntryListAll.forEach((element) => {
    element.classList.add("violet-red-note-entry");
  });

  const violetRedHover = document.querySelectorAll(".hover");
  violetRedHover.forEach((element) => {
    element.classList.add("violet-red-hover");
  });

  const themePageViolet = document.querySelector("#themePage");
  themePageViolet.classList.add("violet-red-settings-background");

  localStorage.setItem("themeColor", "violet-red");
}

function softPink() {
  const softPinkButton = document.querySelectorAll(".button");
  softPinkButton.forEach((element) => {
    element.classList.add("soft-pink");
  });

  const softPinkTextarea = document.querySelectorAll('[data-id="changeTheme"]');
  softPinkTextarea.forEach((element) => {
    element.classList.add("soft-pink-textarea");
  });

  const softPinkEntryListAll = document.querySelectorAll("#noteEntry");
  softPinkEntryListAll.forEach((element) => {
    element.classList.add("soft-pink-note-entry");
  });

  const softPinkHover = document.querySelectorAll(".hover");
  softPinkHover.forEach((element) => {
    element.classList.add("soft-pink-hover");
  });

  const themePagePink = document.querySelector("#themePage");
  themePagePink.classList.add("soft-pink-settings-background");

  localStorage.setItem("themeColor", "soft-pink");
}

function orange() {
  const OrangeButton = document.querySelectorAll(".button");
  OrangeButton.forEach((element) => {
    element.classList.add("light-orange");
  });

  const orangeTextarea = document.querySelectorAll('[data-id="changeTheme"]');
  orangeTextarea.forEach((element) => {
    element.classList.add("light-orange-textarea");
  });

  const orangeEntryListAll = document.querySelectorAll("#noteEntry");
  orangeEntryListAll.forEach((element) => {
    element.classList.add("light-orange-note-entry");
  });

  const orangeHover = document.querySelectorAll(".hover");
  orangeHover.forEach((element) => {
    element.classList.add("light-orange-hover");
  });

  const themePageOrange = document.querySelector("#themePage");
  themePageOrange.classList.add("light-orange-settings-background");

  localStorage.setItem("themeColor", "light-orange");
}

function iceBlue() {
  const iceBlueButton = document.querySelectorAll(".button");
  iceBlueButton.forEach((element) => {
    element.classList.add("ice-blue");
  });
  const iceBlueTextarea = document.querySelectorAll('[data-id="changeTheme"]');
  iceBlueTextarea.forEach((element) => {
    element.classList.add("ice-blue-textarea");
  });
  iceBlueTextarea.forEach((element) => {
    element.classList.add("ice-blue-textarea");
  });

  const iceBlueEntryListAll = document.querySelectorAll("#noteEntry");
  iceBlueEntryListAll.forEach((element) => {
    element.classList.add("ice-blue-note-entry");
  });

  const iceBlueHover = document.querySelectorAll(".hover");
  iceBlueHover.forEach((element) => {
    element.classList.add("ice-blue-hover");
  });

  const themePageBlue = document.querySelector("#themePage");
  themePageBlue.classList.add("ice-blue-settings-background");

  localStorage.setItem("themeColor", "ice-blue");
}
