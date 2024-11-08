# 변수, 연산자, 조건문, 함수

# 함수

- 1. 일반함수 function name () {}
- 2. 화살표함수 const name = () => {}
- 3. 콜백함수 hello(buy)
- 4. 익명함수(이름없음) addEventListener("click",()=>{})

# 배열, 오브젝트

- [1,2,3,4,5].map((v)=>) //숫자
- ["1","2"].map((v) => v.toIpperCase()) //문자
- [{gym:"유림헬스",price:23000}].map((v)=>) // v안에 오브젝트가 통째로 들어가고
  // v.gym을 하게 되면 문자가 들어가게 되어 slice,toIpperCase 등이 들어갈 수 있고,
  // v.price를 하게 되면 숫자가 들어가게 되어 + 1000 등 계산 하는 식이 들어갈 수 있다.

# Document, Element

- Document - 태그
  - button.syle
  - button.addeventlister()
