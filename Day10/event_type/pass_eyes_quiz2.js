const num = document.getElementById("num");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.innerHTML = btn.innerHTML == `<i class="fa-solid fa-eye"></i>` ? `<i class="fa-solid fa-eye-slash"></i>` : `<i class="fa-solid fa-eye"></i>`;

  num.type = num.type == "text" ? "password" : "text";
});
