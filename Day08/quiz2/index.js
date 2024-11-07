// 0 ~ 10 까지 +,-
const minus = document.getElementById("minus");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");

minus.addEventListener("click", () => {
  const number = Number(zero.innerText);
  if (number > 0) {
    zero.innerText = number - 1;
  }
});

plus.addEventListener("click", () => {
  const number = Number(zero.innerText);
  if (number < 10) {
    zero.innerText = number + 1;
  }
});
