// 유저에게 첫번째 숫자 물어보기
// 유저에게 두번째 숫자 물어보기

// 알럿으로 두 숫자를 더한 값을 나타내기

// const num7 = prompt("첫번째 숫자");
// const num8 = prompt("두번째 숫자");

// const e = Number(num7);
// const f = Number(num8);

// alert(`두 숫자를 더한 값은 ${e + f}입니다.`);

// 유저에게 나이를 물어보고 몇년생인지 알럿으로 알려주기
// 선생님 답
// const age = prompt("몇살입니까?");
// const year = 2024 - Number(age);
// alert(`${age}살은 ${year}년생이시군요`);

const age = prompt("몇살입니까?");
const a = Number(2024 - age);

alert(`${a}년생이시군요`);

// 유저에게 현재 원화를 입력하면 엔화로 바꿔서 알럿으로 알려주기
// 선생님 답
// const won = prompt("현재 원화 입력");
//const yen_rate = 0.11;
// const yen = Number(won) * yen_rate;
// alert(`원화 ${won}원은 엔화 ${yen}엔 입니다`);

const kMoney = prompt("현재 원화 입력");
const b = Number(kMoney * 0.11);

alert(`원화 ${kMoney}원은 엔화 ${b}엔 입니다`);

// 유저에게 비트코인 BTC를 입력받고 원화로 바꿔서 알럿으로 알려주기

const btc = prompt("비트코인 BTC 입력");
const won_rate = 100279000;
const won1 = Number(btc) * won_rate;

alert(`비트코인 ${btc}원은 원화 ${won1}원 입니다`);
