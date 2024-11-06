const container = document.createElement("div");
container.style.width = "200px";
container.style.height = "350px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

const photo1 = document.createElement("img");
photo1.src = "https://www.ediya.com/files/menu/IMG_1730076367601.png";
photo1.style.width = "200px";
photo1.style.height = "200px";
photo1.style.objectfit = "cover";
container.appendChild(photo1);

const word1 = document.createElement("div");
word1.innerHTML = "(EX) HOT 시그니처 라떼";
container.appendChild(word1);

const photo2 = document.createElement("img");
photo2.src = "https://www.ediya.com/files/menu/IMG_1730076504756.png";
photo2.style.width = "200px";
photo2.style.height = "200px";
photo2.style.objectfit = "cover";
container.appendChild(photo2);

const word2 = document.createElement("div");
word2.innerHTML = "(L) ICED 시그니처 라떼";
container.appendChild(word2);

const photo3 = document.createElement("img");
photo3.src = "https://ediya.com/files/menu/IMG_1730076629661.png";
photo3.style.width = "200px";
photo3.style.height = "200px";
photo3.style.objectfit = "cover";
container.appendChild(photo3);

const word3 = document.createElement("div");
word3.innerHTML = "(EX) ICED 시그니처 라떼";
container.appendChild(word3);

document.body.appendChild(container);

const list = [{
  "(EX) HOT 시그니처 라떼",
  },{  "(L) ICED 시그니처 라떼",
  },{"(EX) ICED 시그니처 라떼",
}];

list.forEach((x) => {
  container.appendChild(container(x));
});
