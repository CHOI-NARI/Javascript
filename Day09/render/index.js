// import { menu } from "./data.js";
// import { makeCard } from "./render.js";

// const container = document.querySelector(".container");

// // map의 역할 : 바꿔줘 = 메뉴를 리스트로 바꿔줘
// // join : 배열을 문자열로 바꿔줘. 배열이면 콤마까지 브라우저에 나타나고
// // 문자열로 변하면서 콤마가 사라짐
// container.innerHTML = `
// ${menu.map((v) => makeCard(v.imgSrc, v.name)).join("")}
// `;

// // 2. insertAdjacenHTML
// container.insertAdjacentHTML("afterend", "<button>버튼</button>");

import { makeCard } from "./render.js";
const container = document.querySelector(".container");
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
container.insertAdjacentHTML("beforeend", makeCard("", "커피이름"));
