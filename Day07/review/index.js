const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(1,5fr)";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";

const box1 = document.createElement("button");
box1.innerHTML = "Dashboard";
box1.style.color = "white";
box1.style.fontSize = "20px";
box1.style.width = "200px";
box1.style.height = "50px";
box1.style.border = "1px solid blue";
box1.style.backgroundColor = "blue";
box1.style.borderRadius = "15px";
document.body.appendChild(box1);

const box2 = document.createElement("button");
box2.innerHTML = "Orders";
box2.style.color = "blue";
box2.style.fontSize = "20px";
box2.style.width = "200px";
box2.style.height = "50px";
box2.style.border = "1px solid white";
box2.style.backgroundColor = "white";
box2.style.borderRadius = "15px";
document.body.appendChild(box2);

const box3 = document.createElement("button");
box3.innerHTML = "Analytics";
box3.style.color = "blue";
box3.style.fontSize = "20px";
box3.style.width = "200px";
box3.style.height = "50px";
box3.style.border = "1px solid white";
box3.style.backgroundColor = "white";
box3.style.borderRadius = "15px";
document.body.appendChild(box3);

const box4 = document.createElement("button");
box4.innerHTML = "Customer";
box4.style.color = "blue";
box4.style.fontSize = "20px";
box4.style.width = "200px";
box4.style.height = "50px";
box4.style.border = "1px solid white";
box4.style.backgroundColor = "white";
box4.style.borderRadius = "15px";
document.body.appendChild(box4);

const box5 = document.createElement("button");
box5.innerHTML = "Menu";
box5.style.color = "blue";
box5.style.fontSize = "20px";
box5.style.width = "200px";
box5.style.height = "50px";
box5.style.border = "1px solid white";
box5.style.backgroundColor = "white";
box5.style.borderRadius = "15px";
document.body.appendChild(box5);

container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);
container.appendChild(box4);
container.appendChild(box5);

document.body.appendChild(container);
