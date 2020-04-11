var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("focus", focus);
function focus() {
  document.getElementById("dropDown").style.display = "flex";
  filter.addEventListener("keyup", filterItems);
}

filter.addEventListener("blur", removeOnUnfocus);
function removeOnUnfocus() {
  document.getElementById("dropDown").style.display = "none";
}

// Add item
function addItem(e) {
  e.preventDefault();
  //Get input value
  var newItem = document.getElementById("item").value;
  // Create new li element
  var li = document.createElement("li");
  // Add class
  //   li.classList.add("list-group-item")
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  var delButton = document.createElement("button");
  // Add classes to del button
  delButton.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  delButton.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(delButton);
  // Append li to list
  itemList.appendChild(li);
}
// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var liEl = e.target.parentElement;
      itemList.removeChild(liEl);
    }
  }
}

// Filter items
function filterItems() {
  var text = event.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");

  document.getElementById("dropDown").innerHTML = "";

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";

      var m = document.createTextNode(item.innerText.slice(0, -1));
      var li = document.createElement("li");
      li.appendChild(m);

      li.style.listStyle = "none";
      document.getElementById("dropDown").appendChild(li);
      li.style.borderBottom = "solid 1px gray";
      li.style.textAlign = "center";
    } else {
      item.style.display = "none";
    }
  });

  filter.addEventListener("keyup", goThroughList);
}

let i = -1;
function goThroughList() {
  var filterLi = document.querySelectorAll("#dropDown li");
  if (event.which === 40) {
    if (i < filterLi.length - 1) {
      i++;
    } else if (i === filterLi.length - 1) {
      i = 0;
    } else if (event.which === 13) {
      i = -1;
    }
    filterLi[i].classList.add("choose");
  } else if (event.which === 38) {
    if (i > 0) {
      i--;
    } else if (i === 0) {
      i = filterLi.length - 1;
    } else if (i === -1) {
      i = 0;
    } else if (event.which === 13) {
      i = -1;
    }
    filterLi[i].classList.add("choose");
  } else if (event.which === 8) {
    i = -1;
  }
}

filter.addEventListener("keydown", onEnter);
function onEnter() {
  let filterLi = document.querySelectorAll("#dropDown li");

  if (event.which === 13) {
    var chosenLi;
    [...filterLi].forEach((item) => {
      if (item.classList.contains("choose")) {
        chosenLi = item.innerText;
      }
    });
    filter.value = chosenLi;
    document.getElementById("filter").blur();

    var text = event.target.value.toLowerCase();
    var items = itemList.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) != -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}