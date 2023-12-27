/* for 문 */
for(let i =0; i < 10; i++){
    if(i==3){
        console.log('It is 3');
        continue; // 아래를 생략하고 다음 루프로 넘어간다.
    }
    if(i==5){
        console.log('5 Stop the loop');
        break; // 루프를 멈춘다.
    }
    console.log('Number: ' + i)
}

/* for/in 문: 객체의 속성을 따라 반복한다. (자바의 for each와 유사) */
const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}
// x = 속성들
for(let x in user){
    console.log(`${x}: ${user[x]}`);
}

/* while 문 : 조건이 true 일때 반복 */
let i = 0;
while(i < 10){
    console.log('Number: ' + i);
    i++;
}

/* do/while 문: 먼저한번실행하고 그 이후 while */
//let v = 0; // 0~9
let v = 100; // 100

do{
    console.log('Number: ' + v);
    v++;
}
while(v < 10);

/* 배열과 Loop */
