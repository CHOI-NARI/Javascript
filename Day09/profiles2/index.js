import { data } from "./data.js";
import { makeList } from "./render.js";

const container = document.querySelector(".container");
container.insertAdjacentHTML("beforeend", data.map((v) => makeList(v.image, v.name, v.color, v.hex_color, v.money, v.mobile)).join(""));
