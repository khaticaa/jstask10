let input = document.createElement("input");
let closebtn = document.createElement("button");
let openbtn = document.createElement("button");
let body = document.querySelector("body");
closebtn.innerText = "CLOSE";
openbtn.innerText = "OPEN";
body.append(input, closebtn, openbtn);
openbtn.disabled = true;

closebtn.addEventListener("click", () => {
  input.disabled = true;
  closebtn.disabled = true;
  openbtn.disabled = false;
});

openbtn.addEventListener("click", () => {
  input.disabled = false;
  closebtn.disabled = false;
  openbtn.disabled = true;
});

document.body.append(body);
