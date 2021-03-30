window.onload = function () {
  var button = document.getElementById("add");
  button.onclick = addItem;
};

function addItem() {
  let textInput = document.getElementById("input"); //getting text input
  let text = textInput.value; //getting value of text input element
  let ul = document.getElementById("list"); //getting element <ul> to add element to
  let li = document.createElement("li"); //creating li element to add
  li.innerHTML = text; //inserting text into newly created <li> element
  li.onclick = function () {
    this.parentNode.removeChild(this);
  };
  if (ul.childElementCount == 0) {
    //using if/else statement to add items to top of list
    ul.appendChild(li); // will add if count of ul children is 0 otherwise add before first item
  } else {
    ul.insertBefore(li, ul.firstChild);
  }
}

//full reset
let remall = () => {
  let element = document.getElementById("list");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

function searchKeyPress(e) {
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById("add").click();
    return false;
  }
  return true;
}
