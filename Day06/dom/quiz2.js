const palette = [
  { name: "positiony", color: "pink" },
  { name: "z-index", color: "pink" },
  { name: "top", color: "pink" },
  { name: "bottom", color: "pink" },
  { name: "left", color: "pink" },
  { name: "right", color: "pink" },
  { name: "flexbox properties", color: "pink" },
  { name: "float", color: "pink" },
  { name: "clear", color: "pink" },
];

const layout = (x, y) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  // △ Javascript를 통해서 html의 content를 가져와서 화면상에 보여줌
  btn.style.backgroundColor = y;
  btn.style.borderRadius = "15px";
  btn.style.border = "none";
  btn.style.margin = "15px";
  btn.style.width = "100px";
  btn.style.height = "50px";
  btn.style.fontWeight = "bold";
  document.body.appendChild(btn);
};

palette.forEach((x) => layout(x.name, x.color));

// x축에 name 내용들이 변경되어 적용 / y축에 color 내용들이 변경되어 적용

// const div = document.createElement("div");
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black";

// const btn = document.createElement("button");
// btn.innerHTML = "아망추";

// div.appendChild(btn);

// document.body.appendChild(div);
