let coo = document.cookie;
// console.log(coo);
var addNote = document.getElementById("add-note");
var mainArt = document.getElementsByClassName("mainDiv")[0];
addNote.addEventListener("click", addNotes);

function showCookies() {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i] == "") continue;
    let cookie = cookies[i].trim().split("=")[0];
    let value = cookies[i].trim().split("=")[1];
    let note = document.createElement("div");
    note.className = "noteDiv";
    note.innerHTML =
      `<div>
    <div style='display: flex;'>
  <p class="title">` +
      "cookie" +
      `</p>
    <img onclick='deleteNote(this)' src='./assets/images/trash-bin.png' style='height: 20px; width: 20px; margin: 15px 5px 0px auto'>
    </div>
  <pre class="text">` +
      "value" +
      `</pre>
</div>`;
    document.getElementsByClassName("mainDiv")[0].appendChild(note);
    const coo = document.getElementsByClassName("title");
    const lastCoo = coo[coo.length - 1];
    lastCoo.textContent = cookie;
    const tee = document.getElementsByClassName("text");
    const lastTee = tee[tee.length - 1];
    lastTee.textContent = value;
  }
}
showCookies();
let sss = true;

document.getElementById("menu-img").addEventListener("click", function () {
  if (window.innerWidth <= 768) {
    if (sss) {
      document.getElementById("aside-mobile").style.animation =
        "opacity 0.5s ease";
      document.getElementById("aside-mobile").style.display = "flex";
      sss = false;
    } else if (sss === false) {
      document.getElementById("aside-mobile").style.display = "none";

      sss = true;
    }
  }
});
function addNotes() {
  addTitle;
  if (
    document.getElementById("menu-inp").value === "" ||
    document.querySelector(".title") === "theme"
  ) {
    addTitle();
  } else {
    if (document.getElementById("title-inp").value == "") {
      alert("Please Enter Title");
    } else {
      let text = document.getElementById("menu-inp").value;
      let title = document.getElementById("title-inp").value;
      let note = document.createElement("div");
      note.className = "noteDiv";
      note.innerHTML =
        `<div>
      <div style='display: flex;'>
    <p class="title">` +
        "title" +
        `</p>
      <img onclick='deleteNote(this)' src='./assets/images/trash-bin.png' style='height: 20px; width: 20px; margin: 15px 5px 0px auto'>
      </div>
    <pre class="text">` +
        "text" +
        `</pre>
  </div>`;
      mainArt.appendChild(note);
      const titles = document.getElementsByClassName("title");
      const lastTitle = titles[titles.length - 1];
      lastTitle.textContent = title;
      const texts = document.getElementsByClassName("text");
      const lastText = texts[texts.length - 1];
      lastText.textContent = text;
      document.cookie =
        title + "=" + text + "; expires=Thu, 18 Dec 2999 12:00:00 UTC; path=/;";
      document.getElementById("menu-inp").value = "";
      document.getElementById("title-inp").value = "";
      let cookies = document.cookie;
      // console.log(cookies);
    }
  }
}

document.getElementById("menu-inp").addEventListener("focus", addTitle);
function addTitle() {
  let title = document.getElementById("title-inp");
  title.style.display = "block";
  document.getElementsByClassName("inputs-div")[0].style.height = "300px";
  addNote.removeEventListener("click", addNotes);
  addNote.addEventListener("click", removeTitle);
  document.getElementById("menu-inp").focus();
}

function removeTitle() {
  document.getElementById("title-inp").style.display = "none";
  document.getElementsByClassName("inputs-div")[0].style.height = "100%";
  document.getElementById("menu-inp").style.height = "40%";
  addNote.removeEventListener("click", removeTitle);
  addNote.addEventListener("click", addNotes);

  // addNotes();
}

function deleteNote(e) {
  let cookList = [];
  e.parentElement.parentElement.parentElement.remove();

  // Get all the child elements of the parent element of 'e'
  const childElements =
    e.parentElement.parentElement.parentElement.getElementsByClassName(
      "title"
    )[0];

  document.cookie =
    childElements.textContent +
    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

let asideDiv = document.getElementsByClassName("aside-div");
asideDiv[0].style.boxShadow = "0px 0px 10px #cccccc";
function clickAside(num) {
  for (let i = 0; i < 4; i++) {
    asideDiv[i].style.boxShadow = "none";
  }
  asideDiv[num].style.boxShadow = "0px 0px 10px #cccccc";
}

function setTheme(theme) {
  if (theme === "light") {
    document.cookie =
      "theme=light; expires=Thu, 18 Dec 2999 12:00:00 UTC; path=/;";
    document.documentElement.style.setProperty("--note-color", "white");
    document.documentElement.style.setProperty("--color", "#2e2e2e");
    document.documentElement.style.setProperty("--text-color", "#3a3a3a");
    if (window.innerWidth >= 768) {
      document.getElementsByClassName("art-main")[0].style.backgroundColor =
        "#f0f0f0";
    }
    try {
      document.documentElement.style.setProperty("--shadow-color", "#cccccc");
    } catch (error) {
      alert("Please First Take a note");
    }
    document.getElementById("body").style.backgroundColor = "white";
  } else if (theme === "dark") {
    document.cookie =
      "theme=dark; expires=Thu, 18 Dec 2999 12:00:00 UTC; path=/;";
    document.documentElement.style.setProperty("--note-color", "#242424");
    document.documentElement.style.setProperty("--color", "white");
    document.documentElement.style.setProperty("--text-color", "#dedede");
    document.getElementById("body").style.backgroundColor = "#242424";
    if (window.innerWidth >= 768) {
      document.getElementsByClassName("art-main")[0].style.backgroundColor =
        "#181818";
    }

    try {
      document.documentElement.style.setProperty("--shadow-color", "#000");
    } catch (error) {
      alert("Please First Take a note");
    }
  }
  document.getElementById("set-theme-div").style.display = "none";
}
for (let i = 0; i < document.cookie.split(";").length; i++) {
  let _theme = document.cookie.split(";")[i].split("=")[1];
  if (_theme === "dark") {
    setTheme("dark");
  } else if (_theme === "light") {
    setTheme("light");
  }
}

function displaySetting() {
  document.getElementById("set-theme-div").style.display = "flex";
}
const slement = document.querySelectorAll(".title");
slement.forEach((element) => {
  if (element.textContent === "theme") {
    element.parentElement.parentElement.parentElement.remove();
  }
});
