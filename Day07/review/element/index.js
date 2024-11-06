// 기본타입 : String, Number, Boolean, null, underfined
// 참조타입 :
// 1. Array([]), Object({})
// 2. Element(tag)

// array 타입 : const a = []
// Object 타입 : const b = {}
// tag 타입 : const c = document.createElement("button");

const div = document.createElement("div");

// 1. 태그의 컨텐츠 만들기
// 큰따옴표 안에 내용 button까지 글자로 모두 출력함
div.innerHTML = "<button> 떡볶이 </button>";

// 큰따옴표 안에 내용 button을 해석하여 네모 모양으로 출력함
div.innerText = "<button> 라면 </button>";

// 2. 태그의 스타일 바꾸기
// Javascript에서는 camel표기법 - css에서는 background-color로 표기됨
// 1번 방법
div.style.backgroundColor = "red";
// 2번 방법
div.style.setProperty("color", "pink");
div.style.setProperty("border", "1px solid green");
// 3번 방법
div.style.cssText = "margin : 10px; padding : 20px; border-radius : 20px";

// 3. 태그의 자식추가
div.appendChild(); //자식 추가
div.removeChild(); //자식 삭제

document.appendChild(div);
