//유저한테 김밥 재료 입력받고
// 유저한테 받은 재료로 김밥을 만드는 함수 만들기

const rice1 = prompt("김밥 재료 입력");

function result(x) {
  console.log("김 펼치기");
  console.log("밥 펼치기");
  console.log(`${x}넣기`); //백틱
  console.log("돌돌말기");
  console.log("김밥 완성");
}

result(rice1); // 위 이름 동일하게 신경쓰기

// function ramen(x) {
//     console.log("물 끓이기");
//     console.log("면 넣기");
//     console.log("스프 넣기");
//     console.log(`${x} 넣기`);
//     console.log("3분 기다리기");
//     console.log("라면 완성");
//   }

//   ramen("스팸");
