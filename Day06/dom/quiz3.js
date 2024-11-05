const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(5,1fr)";

const colorList = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#16a085",
  "#27ae60",
  "#f1c40f",
  "#ecf0f1",
  "#f39c12",
  "#2c3e50",
];

colorList.forEach((x) => {
  const box = document.createElement("div");
  box.style.width = "200px";
  box.style.height = "200px";
  box.style.backgroundColor = x;
  container.appendChild(box);
});

document.body.appendChild(container);
