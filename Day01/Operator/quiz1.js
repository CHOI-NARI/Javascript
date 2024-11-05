// // 1. 유저에게 몇년생인지 물어보고
// // 알럿으로 2006년생 이후면 미성년자 입니다! 아니면 성인입니다!

const year = prompt("당신은 몇년생입니까?");
const answer1 = Number(year) >= 2006 ? "미성년자입니다" : "성인입니다";

alert(`당신은 ${answer1}`);

// 2. 유저에게 키를 물어보고 140 이상이면
// 알럿으로 해당 놀이기구를 탈 수 있습니다. 아니면 탈 수 없습니다.

const height = prompt("키가 몇입니까?");
const answer2 = Number(height) >= 140 ? "탈 수 있습니다" : "탈 수 없습니다";
alert(`당신은 놀이기구를 ${answer2}`);

// 3. 유저에게 영어 점수와 수학 점수를 물어보고
// 영어 점수와 수학 점수가 평균이 60점 이상이면 합격이고
// 단 둘중 하나라도 60점 이하이면 탈락이고
// 또는 평균이 60점 이하여도 탈락입니다.

const math = prompt("수학 점수는?");
const eng = prompt("영어 점수는?");
const mathScore = Number(math) > 60;
const engScore = Number(eng) > 60;
const totalScore = (mathScore + engScore) / 2 >= 60;
const answer3 =
  (mathScore && engScore) || totalScore ? "합격입니다" : "탈락입니다";

alert(`당신의 점수는 ${answer3}`);

// 4. 유저에게 숫자를 입력받고
// 알럿으로 홀수인지 짝수인지 나타내기

const num = prompt("숫자를 입력하세요");
const add = Number(num);
const answer4 = add % 2 ? "홀수" : "짝수";

alert(answer4);
