/* 무한 스크롤 */
const count = 20;
let itemIndex = 0;
// 옵저버 api 생성 및 할당
const observer = new IntersectionObserver(entries => {
    console.log('entries', entries);

    entries.forEach(entry => {
                    // entry는 제공되는 객체임
        const list = document.querySelector('.list');

        if(entry.isIntersecting === true){
            for(let i = itemIndex; i<itemIndex+count; i++){

                let item = document.createElement('p');

                item.textContent = i;
                item.className += 'item';
                list.appendChild(item);
            }

            itemIndex = itemIndex+count;
        }
    })
}, {root: null, threshold: 0.1});
// root를 null로 하면 Viewport가 root가 된다. (기본값임)
// 옵저버가 관찰할 요소를 지정
observer.observe(document.querySelector('.end'));

