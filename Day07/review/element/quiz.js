const circle = document.createElement("div");
circle.style.borderRadius = "9999px";
circle.style.border = "2px solid purple";
circle.style.width = "200px";
circle.style.height = "200px";

const photo = document.createElement("img");
photo.src = "jo.jpg";
circle.appendChild(photo);
photo.style.width = "200px";
photo.style.height = "200px";
photo.style.borderRadius = "9999px";
photo.style.objectfit = "cover";

const sentence = document.createElement("span");
sentence.innerHTML = "Your Story";
document.body.appendChild(sentence);

document.body.appendChild(circle);
