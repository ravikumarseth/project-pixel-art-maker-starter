// Select color input
let colorPicker = document.getElementById("colorPicker");
// Select size input
let numberHeight = document.getElementById("input_height");
let numberWidth = document.getElementById("input_width");

// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker").onsubmit = function(e) {
  e.preventDefault();
  makeGrid();
}

const table = document.getElementById("pixel_canvas");

function makeGrid() {
  table.innerHTML = "";
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < numberHeight.value; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < numberWidth.value; j++) {
      let td = document.createElement("td");
      // For allowing the color to change back to white
      // for correcting mistakes
      let colorChanged = true;
      td.onclick = function() {
        if (colorChanged) {
          this.style.backgroundColor = colorPicker.value;
          colorChanged = false;
          console.log(colorChanged);
        } else {
          this.style.backgroundColor = "white";
          colorChanged = true;
        }
      };
      tr.appendChild(td);
    }
    fragment.appendChild(tr);
  }
  table.appendChild(fragment);
}
