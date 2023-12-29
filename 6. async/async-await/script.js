/*
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
*/

// 위의 promise 코드를 async-await로 재 작성
async function makeRequests(){
    try{
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1')
        const jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
    } catch(error){
        console.error(error);
    } finally{
        console.log('--- 모든 작업 끝 ---')
    }
}
makeRequests();

// 훨씬 가독성이 좋음