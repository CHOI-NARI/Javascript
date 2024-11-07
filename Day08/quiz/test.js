const minus = document.getElementById("minus");
const num = document.getElementById("num");
const plus = document.getElementById("plus");

plus.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});
minus.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});
