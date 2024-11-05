// 0, "", null, undefined, [] -> falsy
// 그 외 -> truthy

// 모두 true 이어야만 true, 하나라도 false 이면 결과는 false
// ex. 키도 크고, 인서울 졸업하고, 서울에 살고, 모두 맞아야만 소개팅 받겠다.
const a1 = true && false;

// 하나라도 true 이면 결과는 true
// ex. 키가 크고, 인서울 졸업하고, 서울에 사는중에 하나만 맞아도 소개팅 받겠다.
const a2 = true || false || false;

const a3 = false || "요거트";

const user = prompt("고객님 이름");
const name = user || "Guest";
console.log(`${name}님이 들어왔습니다!`);

const c = true && "콜라";
const d = false && "물";

// 1. 유저에게 프롬프트로 비밀번호 입력을 받고
// 비밀번호가 "1234"면 로그인 성공
// 아니면 아무것도 안일어나기

const password = prompt("비밀번호 입력!");
const isLogin = password == "1234";
isLogin && alert("로그인 성공!");
