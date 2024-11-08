import { data } from "./data.js";
import { makeCard } from "./render.js";

const container = document.querySelector(".container");
container.insertAdjacentHTML(
  "beforeend",
  data.map((v) => makeCard(v.name, v.job_tatle, v.image))
);
