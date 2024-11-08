import { minus, plus } from "./calc.js";
import { bye, hello } from "./greeting.js";

console.log(plus(2, 3));
console.log(minus(10, 1));

const a = document.getElementById("a");
a.addEventListener("click", hello);

const b = document.getElementById("b");
b.addEventListener("click", bye); //ctrl + space 누르면 자동연결
