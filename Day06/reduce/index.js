// map, filter, every, some, reduce, forEach

const list = [1, 2, 3, 4, 5];

//reduce : 요소들을 누적시키기
list.map((x) => x);
list.reduce((x, y) => {
  x + y;
});

// x는 누적된 값, y는 현재값 (순서대로)
// 첫시작에 누적된 값이 없어서 x=1, y=2로 시작 첫 답은 3.
// 두번째 x=누적된 3, y=현재값 (순서대로) 3.

list.forEach((x) => console.log(x));
