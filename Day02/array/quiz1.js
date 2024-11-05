// 헬스장 인원 리스트가 있다고 가정함
// 신규 회원을 2명을 추가를 할거임
// 신규 회원의 이름, 나이, 성별, 사는곳, 전화번호를 각각 입력받고
// 헬스장 인원 리스트에 추가해서

// 최종 헬스장 인원 리스트를 콘솔로 나타내기

const gym = [];

const member1 = {};
member1.name = prompt("이름 입력");
member1.age = prompt("나이 입력");
member1.gender = prompt("성별 입력");
member1.phone = prompt("사는곳 입력");
gym.push(member1);

const member2 = {};
member2.name = prompt("이름 입력");
member2.age = prompt("나이 입력");
member2.gender = prompt("성별 입력");
member2.phone = prompt("사는곳 입력");
gym.push(member2);

console.log(gym);
