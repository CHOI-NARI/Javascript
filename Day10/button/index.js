// 1. 고대시대 방법
const btn = document.createElement("button");
btn.innerText = "Button";
btn.style.padding = "10px 20px;";
btn.style.borderRadius = "30px;";
btn.style.backgroundColor = "skyblue";

// 2. 함수 사용
const bmakeButton = (text, color) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.style.padding = "10px 20px;";
  btn.style.borderRadius = "30px;";
  btn.style.backgroundColor = "color";
  document.body.appendChild.btn;
};

// 3. 클래스 사용
class Button {
  constructor(backgroundColor) {
    this.button = document.createElement("button");
    this.button.innerText = "Button";
    this.button.style.backgroundColor = backgroundColor;
    this.button.style.padding = "10px 20px;";
    this.button.style.borderRadius = "30px";
  }
  appendToHtml() {
    document.body.appendChild(this.button);
  }
}

const pinkButton = new Button("pink");
pinkButton.appendToHtml();
const skyblueButton = new Button("skyblue");
skyblueButton.appendToHtml();
