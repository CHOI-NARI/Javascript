//html[=document]
//element[=tag]

// const btn = window.document.createElement("button");
// btn.innerHTML = "점메추";
// btn.style.backgroundColor = "red";
// window.document.body.appendChild(btn);

// button 아메리카노
// div 코카콜라
// span 라면

// const btn2 = window.document.createElement("button");
// btn2.innerHTML = "아메리카노";
// window.document.body.appendChild(btn2);

// const btn3 = window.document.createElement("div");
// btn3.innerHTML = "코카콜라";
// window.document.body.appendChild(btn3);

// const btn4 = window.document.createElement("span");
// btn4.innerHTML = "라면";
// window.document.body.appendChild(btn4);

//------------------------------------------------

// const img = document.createElement("img");
// img.src = ""

//-------------------------------------------------

const div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

const btn = document.createElement("button");
btn.innerHTML = "아망추";

div.appendChild(btn);

document.body.appendChild(div);
