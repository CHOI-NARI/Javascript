const coffee = "ice americano";
coffee.toUpperCase(); //대문자화 ICE AMERICANO
coffee.toLowerCase(); // 소문자화
coffee.charAt(0); //몇번째 알파벳 알려줌 -> 0 입력시 i
coffee.indexOf("am"); //am이 몇번째 있는지 알려줌 -> 4
coffee.includes("ce"); //ce가 포함하는지 알려줌 -> true/false 로 알려줌
coffee.startsWith("a"); //a로 시작하는지 알려줌 -> true/false로 알려줌
coffee.slice(0, 4); //0번째부터 3번째까지 잘라서 줌 -> ice (빈문자열까지)
coffee.replace("ice", "hot"); //ice를 hot로 바꾸기 -> hot americano
coffee.repeat(2); //해당 단어 2번 반복하기

const kidsCafe = ["타요키즈카페", "하츄핑키즈카페", "점핑키즈카페"];

kidsCafe.push("애완키즈카페"); // 배열의 맨 끝에 값을 추가한다
kidsCafe.pop(); // 배열의 맨 끝에 값을 제거한다
kidsCafe.unshift(); // 배열의 맨 앞에 값을 추가한다
kidsCafe.shift(); // 배열의 맨 앞에 값을 제거한다

kidsCafe.reverse(); // 순서 거꾸로 하기
kidsCafe.sort(); // 순서대로 줄세우기(정렬하기)

kidsCafe.includes("하츄핑키즈카페"); // 하츄핑키즈카페 포함하는지 물어보기
kidsCafe.splice(0, 1); //자르기
