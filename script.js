var addNote = document.getElementById("add-note");
var mainArt = document.getElementsByClassName("mainDiv")[0];
addNote.addEventListener("click", addNotes);
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
  if (document.getElementById("menu-inp").value == "") {
    addTitle();
  } else {
    let text = document.getElementById("menu-inp").value;
    let title = document.getElementById("title-inp").value;
    let note = document.createElement("div");
    note.className = "noteDiv";
    note.innerHTML =
      `<div>
      <div style='display: flex;'>
    <p class="title">` +
      title +
      `</p>
      <img onclick='deleteNote(this)' src='./assets/images/trash-bin.png' style='height: 20px; width: 20px; margin: 15px 5px 0px auto'>
      </div>
    <pre class="text">` +
      text +
      `</pre>
  </div>`;
    mainArt.appendChild(note);
    document.getElementById("menu-inp").value = "";
    document.getElementById("title-inp").value = "";
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
  e.parentElement.parentElement.parentElement.remove();
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
    document.documentElement.style.setProperty("--note-color", "#242424");
    document.documentElement.style.setProperty("--color", "white");
    document.documentElement.style.setProperty("--text-color", "#dedede");
    document.getElementById("body").style.backgroundColor = "#242424";
    if (window.innerWidth >= 768) {
      document.getElementsByClassName("art-main")[0].style.backgroundColor =
        "#242424";
    }

    try {
      document.documentElement.style.setProperty("--shadow-color", "#000");
    } catch (error) {
      alert("Please First Take a note");
    }
  }
  document.getElementById("set-theme-div").style.display = "none";
}

function displaySetting() {
  document.getElementById("set-theme-div").style.display = "flex";
}
