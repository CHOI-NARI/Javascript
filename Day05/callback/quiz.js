// 🧙⚡🧊🔥

// skill 이라는 함수가 있고 콜백함수로 다양한 스킬로 받아서 실행되는 함수 구현하기
// skill(번개)

// 마법사 스킬준비 🧙
// ⚡ 스킬 발동!
// 마법사 스킬 완료!

// const skill = (a) => {
//   console.log("마법사 스킬준비 🧙");
//   a();
//   console.log("마법사 스킬 완료!");
// };

// const thunder = () => {
//   console.log("⚡ 스킬 발동!");
// };

// skill(thunder);

// const skill2 = () => {
//     console.log("마법사 스킬준비");

//     a();
//     console.log("마법사 스킬 완료!");
// };

// // 선생님답
// const skill = (magic) => {
//     console.log("마법사 스킬준비 🧙");
//   magic();
//   console.log("마법사 스킬 완료!");
// };

// const thunder = () => {
//   console.log("⚡ 스킬 발동!");
// };

// const ice = () => {
//   console.log("🧊 스킬 발동!");
// };

// const fire = () => {
//   console.log("🔥 스킬 발동!");
// };

// skill(ice);
// skill(fire);

// // 위 공식을 아래로 줄이면
// const skill2 = (magic) => {
//     console.log("마법사 스킬준비 🧙");
//   magic();
//   console.log("마법사 스킬 완료!");
// };

// const attackSkill = (property) => {
//     console.log(`${property}스킬발동!`);
// };

// 🦐 🍗 🍳 🧀 🥩

// 타고 만들기 함수 만들어주기
// 재료 추가 함수 각각 만들어서
// 유저에게 타코 메뉴를 선택 받아서 콘솔로 타코 만들고 나타내기

const taco = (ingredient) => {
  console.log("타코 만들기 준비");
  ingredient();
  console.log("타고 만들기 완성");
};

const Shrimp = () => {
  console.log("🦐넣기");
};

const chicken = () => {
  console.log("🍗넣기");
};

const egg = () => {
  console.log("🍳넣기");
};

const cheese = () => {
  console.log("🧀넣기");
};

const beef = () => {
  console.log("🥩넣기");
};

const menu = Number(
  prompt("타코 메뉴 입력 1.새우 2.치킨 3. 계란 4. 치즈 5. 소고기")
);

// const taco = {
//   1: taco(shrimp),
//   2: taco(chisken),
//   3: taco(fry),
// };
