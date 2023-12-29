/*
function fetchData(){
    return new Promise((resolve, reject)=>{
        // 비동기 요청
        const success = false; //요청이 성공했다고 가정
        if(success){
            resolve('성공');
        } else {
            reject('실패');
        }
    })
}

fetchData()
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.error(error);
    })
*/    

/* 실제로 비동기 요청을 보내보기 */
// Promise생성자는 프로미스를 지원하지 않는 함수를 감쌀때 사용하는 것이다.
// fetch는 내장 메소드이다, 프로미스를 지원한다. 따로 new Promise()를 명시하지 않아도된다.
fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then(response1 => response1.json()) // 받아와서 json으로 변환
    .then(json1 => console.log(json1))   // json으로 변환된걸 받기
    .then(()=> fetch('http://jsonplaceholderㅇㅇ.typicode.com/todos/2'))
    .then(response2 => response2.json())
    .then(json2 => console.log(json2))
    .catch((error)=>{
        console.error(`에러: ${error}`);
    })
    .finally(()=>{
        console.log('작업끝!');
    });

