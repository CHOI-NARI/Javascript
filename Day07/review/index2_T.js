const makebutton = (title) => {
  const button = document.createElement("button");
  button.innerHTML = title;
  button.style.backgroundColor = "blue";
  button.style.border = "1px solid blue";
  button.style.color = "white";
  button.style.padding = "15px 20px";
  button.style.borderRadius = "12px";
  button.style.fontWeight = "600";
  return button;
};
