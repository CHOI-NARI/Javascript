// 타코 만들기 🦐🍗🍳🧀🥩
// 1. 🦐(2$) 🍗(2$) 🍳(1$) 🧀(1$) 🥩(3$) 버튼들이 화면에 있음
// 2. 총가격 : 0$ 가격표시가 화면에 있음
// 3. 구매하기 버튼도 화면에 있음
// 위에 재료들을 클릭하면 총가격이 올라가고 구매하기 버튼을 누르면
// 총 금액은 ~~~ 이고, 구매하신 타코재료는 클릭한 재료! 알럿으로 나오기!

const menuList = ["🦐", "🍗", "🍳", "🧀", "🥩", "구매하기"]; // array 함수 사용함
const makeButton = (menu) => {
  const button = document.createElement("button"); // button이라는 이름을 가진 button을 생성
  button.innerText = menu; // button안에 이모지가 순차적으로 들어오도록 함
  button.addEventListener("click", () => {
    alert(`${menu}`); // 클릭하면 팝업창으로 보이게 함
  });
  return button; // return의 역할 : 클릭하면 메뉴가 버튼으로 돌아오게 함
};
menuList.forEach((v) => document.body.appendChild(makeButton(v)));
