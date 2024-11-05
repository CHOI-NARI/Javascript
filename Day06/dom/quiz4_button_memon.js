// ### 속성 정의 영역

// List에 각 행 마다의 속성을 설정해준다.
const rowList = [{
    color: 'white',
    backgroundColor: '#2980b9',
    border: 'none',
},{
    color: 'white',
    backgroundColor: '#3498db',
    border: 'none',
},{
    color: '#2980b9',
    backgroundColor: '#ecf0f1',
    border: '1px solid #2980b9',
},{
    color: 'white',
    backgroundColor: '#bdc3c7',
    border: 'none',
}];

// List에 각 열 마다의 속성을 설정해준다.
const colList = ['100px', '150px', '200px'];

// ### Element를 정의

// container 정의
const container = document.createElement('div');

// rowList의 각 행을 반복한다.
rowList.forEach(rowStyle => {
    // 행 Element를 생성
    const rowBox = document.createElement('div');

    // colList의 각 열을 반복한다.
    colList.forEach((width) => {
        // 열 Element를 생성
        const colBox = document.createElement('button');

        // 버튼의 공통적인 특징을 설정
        colBox.innerHTML = 'Button';
        colBox.style.borderRadius = "30px";
        colBox.style.margin = "10px";
        colBox.style.height = "50px";
        colBox.style.fontSize = "17px";

        // 행의 공통적인 특징을 설정
        colBox.style.backgroundColor = rowStyle.backgroundColor;
        colBox.style.color = rowStyle.color;
        colBox.style.border = rowStyle.border;
    
        // 열의 개별적인 특징을 설정
        colBox.style.width = width;
        
        // 행 Element에 열 Element를 자식으로 추가해준다.
        rowBox.appendChild(colBox);
    });
    
    // container Element에 행 Element를 자식으로 추가해준다.
    container.appendChild(rowBox);
});

// 최종적으로 구성한 container를 실제로 보이기 위해, body의 자식으로 추가해준다.
document.body.appendChild(container);
