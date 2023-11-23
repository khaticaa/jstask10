const body = document.body;
let labels = ["Yaşlilar üçün", "Böyüklər üçün", "Kiçiklər üçün"];
let values = ["Yasli", "Boyuk", "Kicik"];
for (let i = 0; i < labels.length; i++) {
  let label = document.createElement("label");
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "grup";
  radio.value = values[i];
  label.textContent = labels[i];
  label.appendChild(radio);
  body.appendChild(label);
}
let addButton = document.createElement("button");
addButton.textContent = "Add button";
body.appendChild(addButton);
function TumValue() {
  let selectedRadio = document.querySelector('input[name="grup"]:checked');
  let selectedValue = selectedRadio.value;
  console.log(selectedValue);
}
addButton.addEventListener("click", TumValue);
