const box = document.createElement("div"); //큰박스
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.gap = "10px";

const title = document.createElement("h3"); //제목
title.innerHTML = "Position and Layout";
box.appendChild(title);

const buttonBox = document.createElement("div"); //작은박스를 감싼 박스
buttonBox.style.display = "flex";
buttonBox.style.gap = "10px";

const makebutton = (text) => {
  const button = document.createElement("button"); //작은박스들
  button.style.backgroundColor = "pink";
  button.style.padding = "10px 10px 7px";
  button.style.borderRadius = "10px";
  button.style.border = "1px solid pink";
  button.innerHTML = text;
  return button;
};

const list = [
  "positiony",
  "z-index",
  "top",
  "bottom",
  "left",
  "right",
  "flexbox properties",
  "float",
  "clear",
];

list.forEach((x) => {
  buttonBox.appendChild(makebutton(x));
});
box.appendChild(buttonBox);

document.body.appendChild(box);
