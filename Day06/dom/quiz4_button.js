const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(1,4fr)";

const colorList = [
  "#2980b9",
  "#3498db",
  "#ecf0f1",
  "#bdc3c7",
  "#2980b9",
  "#3498db",
  "#ecf0f1",
  "#bdc3c7",
  "#2980b9",
  "#3498db",
  "#ecf0f1",
  "#bdc3c7",
];

colorList.forEach((x) => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "50px";
  box.style.borderRadius = "30px";
  box.style.margin = "10px";
  box.style.backgroundColor = x;
  box.style.display = "flex";
  box.style.textAlign = "center";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.color = "white";

  container.appendChild(box);

  const span = document.createElement("span");
  span.innerHTML = "button";
  box.appendChild(span);
});

document.body.appendChild(container);
