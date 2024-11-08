import { list } from "./data.js";
import { makeprofile } from "./render.js";

const container = document.querySelector(".container");

container.insertAdjacentHTML("beforeend", list.map((v) => makeprofile(v.img, v.name, v.mobile)).join(""));
