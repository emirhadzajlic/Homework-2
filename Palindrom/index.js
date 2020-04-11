var submitBtn = document.getElementById("submit");
var addButton = document.getElementById("addButton");
var boxesContainer = document.getElementById("boxes");

submitBtn.addEventListener("click", inputBoxes);
addButton.addEventListener("click", addBox);
boxesContainer.addEventListener("click", deleteBox);
document.addEventListener("keyup", callPalindrom);
document.addEventListener("keydown", isValid);

function inputBoxes() {
  event.preventDefault();

  for (let i = 0; i < document.getElementById("num").value; i++) {
    boxesContainer.innerHTML +=
      '<div class="container"><button>X</button><input class="letter" type="text" maxLength="1"></div>';
  }

  document.getElementById("form").style.display = "none";
  addButton.style.display = "block";
}

function addBox() {
  event.preventDefault();

  var div = document.createElement("div");
  div.classList.add("container");

  var deleteBtn = document.createElement("button");
  var inputBox = document.createElement("input");
  inputBox.classList.add("letter");
  inputBox.type = "text";
  inputBox.maxLength = "1";
  deleteBtn.innerHTML = "X";
  div.appendChild(deleteBtn);
  div.appendChild(inputBox);

  document.getElementById("boxes").appendChild(div);
}

function deleteBox() {
  if (event.target.tagName.toLowerCase() === "button") {
    event.target.parentNode.remove(event.target);
    palindrom();
  }
}

function palindrom() {
  var leftToRigth = "";
  var rightToLeft = "";

  var letter = document.getElementsByClassName("letter");

  for (let i = letter.length - 1; i > -1; i--) {
    leftToRigth += letter[i].value;
  }
  for (let i = 0; i < letter.length; i++) {
    rightToLeft += letter[i].value;
  }

  if (leftToRigth === rightToLeft) {
    document.getElementById("palindrom").innerHTML = "Jeste Palindrom";
  } else {
    document.getElementById("palindrom").innerHTML = "Nije Palindrom";
  }
}

function callPalindrom() {
  if (event.target.className === "letter") {
    palindrom();
  }
}

function isValid() {
  if (event.target.className === "letter") {
    if (
      (event.which > 64 && event.which < 91) ||
      event.which === 32 ||
      event.which === 8 ||
      event.which === 9
    ) {
      event.target.style.background = "rgb(240, 239, 239)";
    } else {
      if (event.target.value == "") {
        event.target.style.background = "red";
        event.target.style.transition = ".5s";
      }
    }
  }
}
