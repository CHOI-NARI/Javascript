// // 1. 유저에게 몇년생인지 물어보고
// // 알럿으로 2006년생 이후면 미성년자 입니다! 아니면 성인입니다!

const year = prompt("몇년생입니까?");
const result = Number(year) >= 2006 ? "미성년자입니다" : "성인입니다";

alert(`당신은 ${result}`);

// Number(내용) 은 무조건 숫자로 변환할때만 사용하는지, 문자에만 사용되는지.

// 2. 유저에게 키를 물어보고 140 이상이면
// 알럿으로 해당 놀이기구를 탈 수 있습니다. 아니면 탈 수 없습니다.

const height = prompt("키가 몇입니까??");
const resul1 = Number(height) >= 140 ? "탈 수 있습니다" : "탈 수 없습니다";
alert(`놀이기구를 ${resul1}`);

// 3. 유저에게 영어 점수와 수학 점수를 물어보고
// 영어 점수와 수학 점수가 평균이 60점 이상이면 합격이고
// 단 둘중 하나라도 60점 이하이면 탈락이고
// 또는 평균이 60점 이하여도 탈락입니다.

const math = prompt("수학 점수");
const eng = prompt("영어 점수");

const isMathOver60 = Number(math) >= 60;
const isEngOver60 = Number(eng) >= 60;
const isAvgOver60 = (Number(math) + Number(eng)) / 2 >= 60;

const result3 = isMathOver60 && isEngOver60 && isAvgOver60 ? "합격" : "불합격";
alert(result3);

// 4. 유저에게 숫자를 입력받고
// 알럿으로 홀수인지 짝수인지 나타내기

const num = Number(prompt("숫자입력"));
const result4 = num % 2 ? "홀수" : "짝수";
alert(result4);
