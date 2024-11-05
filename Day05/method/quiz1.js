//유저에게 이메일 아이디를 입력받고

// 1. 도메인이 naver,gmail,daum이 아니면
// 해당 도메인은 안됩니다

// 2. 이메일 주소 아이이디의 길이가 4~16글자 사이가 아니면
// 해당 이메일 주소의 길이가 올바르지 않습니다

// 위의 내용이 통과되면 이메일 주소 등록완료

const email = prompt("이메일 아이디를 입력하세요");
const address =
  email.includes("naver") || email.includes("gmail") || email.includes("daum");

const emailId = email.split("@")[0];

const sentence4 = email.length < 4;
const sentence16 = email.length > 16;

// 위 두줄을 이 한줄로 대체 할 수 있음
// const sentence4 = 4 <= emailId.length && emailId.length <= 16;

if (!address) {
  console.log("해당 도메인은 안됩니다");
} else if (sentence4 || sentence16) {
  console.log("해당 이메일 주소의 길이가 올바르지 않습니다");
} else {
  console.log("이메일 주소 등록완료");
}
